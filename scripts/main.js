let manifest = null;
let isInteracting = false;
let isModalOpen = false;
const videoCache = new Map();
const MAX_CACHE_SIZE = 500 * 1024 * 1024; // 500MB
let currentCacheSize = 0;

function addToCache(key, blob) {
  const blobSize = blob.size || 0;

  // Освобождаем место, если нужно
  while (currentCacheSize + blobSize > MAX_CACHE_SIZE && videoCache.size > 0) {
    const oldestKey = videoCache.keys().next().value;
    const oldestBlob = videoCache.get(oldestKey).blob;
    currentCacheSize -= oldestBlob.size || 0;
    videoCache.delete(oldestKey);
    URL.revokeObjectURL(videoCache.get(oldestKey)?.src);
  }

  const blobUrl = URL.createObjectURL(blob);
  videoCache.set(key, {
    src: blobUrl,
    blob: blob,
    lastUsed: Date.now()
  });
  currentCacheSize += blobSize;
}

// Добавляем приоритетную очередь загрузки
const preloadQueue = {
  high: [],
  medium: [],
  low: [],
  isProcessing: false,

  add: function (src, priority = 'medium') {
    this[priority].push(src);
    if (!this.isProcessing) this.process();
  },

  process: function () {
    this.isProcessing = true;
    const src = this.high.shift() || this.medium.shift() || this.low.shift();

    if (src) {
      this.loadVideo(src).finally(() => {
        setTimeout(() => this.process(), 0); // Даем браузеру "подышать"
      });
    } else {
      this.isProcessing = false;
    }
  },

  loadVideo: async function (src) {
    if (videoCache.has(src)) return;

    try {
      const response = await fetch(`videos/${src}`, {
        headers: { 'Range': 'bytes=0-200000000' } // Частичная загрузка первых 100KB
      });

      if (response.ok) {
        const blob = await response.blob();
        addToCache(src, blob);
      }
    } catch (e) {
      console.error('Preload error:', e);
    }
  }
};

// Инициализация темы
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle.querySelector('.theme-icon');

  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.body.classList.toggle('dark-mode', savedTheme === 'dark');
  themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

  themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeIcon.textContent = isDark ? '☀️' : '🌙';
  });
}

function loadBackgroundMusic() {
  if (!manifest?.audio) return;
  const audio = document.getElementById('bg-audio');

  // Фильтруем треки с background в названии
  const tracks = manifest.audio.filter(f =>
    /\.(mp3|wav|m4a|ogg)$/i.test(f) && f.toLowerCase().includes('background')
  );

  if (tracks.length === 0) return;

  // Перемешиваем треки
  const shuffledTracks = [...tracks].sort(() => Math.random() - 0.5);

  let currentTrackIndex = 0;

  // Функция для проигрывания следующего трека
  const playNextTrack = () => {
    if (shuffledTracks.length === 0) return;

    const track = shuffledTracks[currentTrackIndex];
    audio.src = `audio/${track}`;
    audio.loop = false; // Отключаем loop для перехода к следующему

    audio.play().catch(e => console.log("Ошибка воспроизведения:", e));

    // Переходим к следующему треку после окончания текущего
    audio.onended = () => {
      currentTrackIndex = (currentTrackIndex + 1) % shuffledTracks.length;
      playNextTrack();
    };
  };

  // Начинаем с первого трека
  playNextTrack();

  // Обработка событий для запуска если пауза
  setTimeout(() => {
    if (audio.paused) {
      const playAudio = () => {
        currentTrackIndex = 0; // Сбрасываем индекс при ручном запуске
        playNextTrack();
      };

      document.body.addEventListener('click', playAudio, { once: true });
      document.body.addEventListener('touchstart', playAudio, { once: true });
    }
  }, 1000);
}

async function preloadVideo(src) {
  return new Promise((resolve) => {
    if (videoCache.has(src)) {
      resolve();
      return;
    }

    const video = document.createElement('video');
    video.src = `videos/${src}`;
    video.preload = 'auto';
    video.setAttribute('preload', 'auto');

    // Важно: не загружаем видео полностью, только метаданные
    video.onloadedmetadata = () => {
      videoCache.set(src, video);
      resolve();
    };

    video.onerror = () => {
      console.error('Ошибка предзагрузки видео:', src);
      resolve();
    };

    video.load();
  });
}

async function loadManifest() {
  try {
    const res = await fetch('manifest.json');
    if (!res.ok) throw new Error('404');
    manifest = await res.json();
    console.log('✅ manifest.json загружен');

    // Загружаем все изображения заранее
    if (manifest.images) {
      manifest.images.forEach(img => {
        const image = new Image();
        image.src = `images/${img}`;
      });
    }

    // Загружаем видео заранее в фоне
    if (manifest.videos) {
      manifest.videos.forEach(v => preloadQueue.add(v, 'low'));
    }

    // Инициализация компонентов
    if (typeof initBackground === 'function') initBackground();
    if (typeof initHistory === 'function') initHistory();
    if (typeof initMap === 'function') initMap();
    if (typeof setupMotivationHeader === 'function') setupMotivationHeader();
    if (typeof startDynamicMotivations === 'function') startDynamicMotivations();
    if (typeof loadBackgroundMusic === 'function') loadBackgroundMusic();

  } catch (e) {
    console.error("❌ Не удалось загрузить manifest.json", e);
    manifest = {
      images: ['me-icon.jpg'],
      audio: [],
      videos: []
    };

    window.videoCache = videoCache;

    // Fallback инициализация
    initBackground?.();
    initHistory?.();
    initMap?.();
    setupMotivationHeader?.();
    startDynamicMotivations?.();
    loadBackgroundMusic?.();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  loadManifest();
});