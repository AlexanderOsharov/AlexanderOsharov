const modal = document.getElementById('media-modal');
const body = document.querySelector('.modal-body');
const close = document.querySelector('.modal-close');
const bgAudio = document.getElementById('bg-audio');

// === ГЛОБАЛЬНАЯ ФУНКЦИЯ: открытие медиа ===
window.openMediaModal = function openMediaModal(type, src, posterSrc = null) {
  isModalOpen = true;

  // Убираем эффекты фона
  document.body.style.pointerEvents = 'none';
  document.body.style.opacity = '1';
  document.body.style.filter = 'none';

  modal.classList.remove('hidden');
  body.innerHTML = '';
  document.querySelector('.modal-controls').innerHTML = '';

  // Уменьшаем фоновую музыку
  if (bgAudio) {
    bgAudio.volume = 0.002;
  }

  // Добавляем хеш
  if (src) window.location.hash = `media=${encodeURIComponent(src)}`;

  if (type === 'image') {
    const img = document.createElement('img');
    img.src = `images/${src}`;
    img.style.maxWidth = '90vw';
    img.style.maxHeight = '70vh';
    img.style.filter = 'none';
    img.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
    img.style.borderRadius = '8px';
    img.id = 'modal-image';

    // Контрольные кнопки
    const controls = document.createElement('div');
    controls.className = 'image-controls';

    // Кнопка увеличения
    const zoomInBtn = document.createElement('button');
    zoomInBtn.textContent = '+';
    zoomInBtn.className = 'zoom-btn';
    zoomInBtn.onclick = () => {
      const currentScale = parseFloat(img.style.transform?.match(/scale\(([^)]+)\)/)?.[1] || 1);
      img.style.transform = `scale(${Math.min(currentScale + 0.2, 3)})`;
    };

    // Кнопка уменьшения
    const zoomOutBtn = document.createElement('button');
    zoomOutBtn.textContent = '-';
    zoomOutBtn.className = 'zoom-btn';
    zoomOutBtn.onclick = () => {
      const currentScale = parseFloat(img.style.transform?.match(/scale\(([^)]+)\)/)?.[1] || 1);
      img.style.transform = `scale(${Math.max(currentScale - 0.2, 0.5)})`;
    };

    // Кнопка сброса
    const resetZoomBtn = document.createElement('button');
    resetZoomBtn.textContent = '✕';
    resetZoomBtn.className = 'reset-btn';
    resetZoomBtn.onclick = () => {
      img.style.transform = 'scale(1)';
    };

    // Кнопка лупы
    const magnifierBtn = document.createElement('button');
    magnifierBtn.textContent = '🔍';
    magnifierBtn.className = 'magnifier-btn';
    magnifierBtn.dataset.active = 'false';
    let isMagnifying = false;
    let magnifierCanvas = null;

    magnifierBtn.onclick = () => {
      isMagnifying = !isMagnifying;
      magnifierBtn.dataset.active = isMagnifying.toString();
      if (isMagnifying) {
        magnifierCanvas = document.createElement('canvas');
        magnifierCanvas.width = 200;
        magnifierCanvas.height = 200;
        magnifierCanvas.style.position = 'absolute';
        magnifierCanvas.style.pointerEvents = 'none';
        magnifierCanvas.style.display = 'none';
        magnifierCanvas.style.borderRadius = '50%';
        body.appendChild(magnifierCanvas);

        document.addEventListener('mousemove', handleMagnifierMove);
        document.addEventListener('mouseleave', stopMagnifier);
        img.addEventListener('touchmove', handleTouchMagnifierMove);
        img.addEventListener('touchend', stopMagnifier);
      } else {
        if (magnifierCanvas) magnifierCanvas.remove();
        document.removeEventListener('mousemove', handleMagnifierMove);
        document.removeEventListener('mouseleave', stopMagnifier);
        img.removeEventListener('touchmove', handleTouchMagnifierMove);
        img.removeEventListener('touchend', stopMagnifier);
      }
    };

    // Эмодзи
    const emojiBtn = document.createElement('button');
    emojiBtn.textContent = '😊';
    emojiBtn.className = 'emoji-btn';
    emojiBtn.onclick = () => {
      const emojis = ['😎', '👑', '🐶', '🐱', '❤️', '⭐', '🎉', '🎁', '👓', '🎩', '👃', '🔥', '💥', '✨', '💫'];
      const emoji = emojis[Math.floor(Math.random() * emojis.length)];
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      ctx.font = '60px Arial';
      ctx.fillText(emoji, Math.random() * canvas.width, Math.random() * canvas.height);
    };

    // Очистить
    const clearBtn = document.createElement('button');
    clearBtn.textContent = '🗑️';
    clearBtn.className = 'clear-btn';
    clearBtn.onclick = () => { };

    // Сохранить
    const saveBtn = document.createElement('button');
    saveBtn.textContent = '💾';
    saveBtn.className = 'save-btn';
    saveBtn.onclick = () => {
      const link = document.createElement('a');
      link.download = 'painted-' + src;
      link.href = img.src;
      link.click();
    };

    controls.append(zoomInBtn, zoomOutBtn, resetZoomBtn, magnifierBtn, emojiBtn, clearBtn, saveBtn);
    body.appendChild(img);
    document.querySelector('.modal-controls').appendChild(controls);
  }

  else if (type === 'video') {
    // === Показываем постер или плейсхолдер ===
    const container = document.createElement('div');
    container.style.position = 'relative';

    if (posterSrc) {
      const poster = document.createElement('img');
      poster.src = `images/${posterSrc}`;
      poster.style.width = '90vw';
      poster.style.maxHeight = '70vh';
      poster.style.cursor = 'pointer';
      container.appendChild(poster);
    } else {
      const placeholder = document.createElement('div');
      placeholder.style.background = '#f0f0f0';
      placeholder.style.width = '90vw';
      placeholder.style.height = '50vh';
      placeholder.style.display = 'flex';
      placeholder.style.alignItems = 'center';
      placeholder.style.justifyContent = 'center';
      placeholder.innerHTML = '<p>Подготовка видео...</p>';
      container.appendChild(placeholder);
    }

    body.appendChild(container);

    // === ЗАПУСКАЕМ ЗАГРУЗКУ ИЛИ ИСПОЛЬЗУЕМ КЭШ ===
    (async () => {
      let videoSrc = null;

      // 1. Проверяем кэш
      if (videoCache.has(src)) {
        videoSrc = videoCache.get(src).src;
      } else {
        // 2. Если нет — ждём полной загрузки через preloadQueue
        try {
          await new Promise((resolve, reject) => {
            const check = () => {
              if (videoCache.has(src)) {
                resolve();
              } else if (!preloadQueue.isProcessing && !preloadQueue.high.includes(src) && !preloadQueue.medium.includes(src) && !preloadQueue.low.includes(src)) {
                // Если не в очереди — добавляем
                preloadQueue.add(src, 'high');
              }
              setTimeout(check, 100);
            };
            check();
          });

          if (videoCache.has(src)) {
            videoSrc = videoCache.get(src).src;
          }
        } catch (e) {
          console.error('Video preload failed:', e);
        }
      }

      // === Создаём видео только после полной загрузки ===
      const video = document.createElement('video');
      video.controls = true;
      video.playsInline = true;
      video.muted = false;
      video.style.cssText = `
        width: 90vw;
        max-height: 70vh;
        filter: none;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        border-radius: 8px;
      `;

      if (videoSrc) {
        video.src = videoSrc;
        video.autoplay = true;
      } else {
        // На всякий случай — прямая ссылка (если кэш сломался)
        video.src = `videos/${src}`;
        video.autoplay = true;
        video.preload = 'auto';
      }

      if (posterSrc) video.poster = `images/${posterSrc}`;

      video.onerror = () => {
        container.innerHTML = '<p>Видео недоступно</p>';
      };

      container.innerHTML = '';
      container.appendChild(video);

      // Автоплей (если разрешён)
      video.play().catch(() => {
        console.log('Autoplay blocked, user needs to interact');
      });
    })();
  }

  else if (type === 'text') {
    const p = document.createElement('p');
    p.innerHTML = src;
    p.style.fontSize = '1.3em';
    p.style.textAlign = 'center';
    p.style.maxWidth = '80%';
    p.style.margin = '20px auto';
    p.style.filter = 'none';
    p.style.color = '#000000';
    p.style.backgroundColor = '#ffffff';
    p.style.padding = '10px';
    p.style.borderRadius = '8px';
    p.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    body.appendChild(p);
  }

  else if (type === 'audio') {
    const container = document.createElement('div');
    container.style.cssText = `
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 15px;
      width: 90vw;
      max-width: 400px;
      padding: 20px;
      background: #f8f9fa;
      border-radius: 16px;
      box-shadow: 0 6px 20px rgba(0,0,0,0.1);
      margin: 0 auto;
    `;

    const cover = document.createElement('img');
    cover.src = `images/${sessionRandomImage || getRandomUnavailableIcon()}`;
    cover.style.cssText = `
      width: 150px;
      height: 150px;
      object-fit: cover;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    container.appendChild(cover);

    const audio = document.createElement('audio');
    audio.controls = true;
    audio.style.width = '100%';

    const formats = ['m4a', 'mp3', 'wav', 'ogg', 'webm'];
    let found = false;

    for (const fmt of formats) {
      if (src.toLowerCase().endsWith(`.${fmt}`)) {
        audio.src = `audio/${src}`;
        found = true;
        break;
      }
    }

    if (!found) {
      for (const fmt of formats) {
        const trySrc = `audio/${src}.${fmt}`;
        const xhr = new XMLHttpRequest();
        xhr.open('HEAD', trySrc, false);
        xhr.send();
        if (xhr.status === 200) {
          audio.src = trySrc;
          found = true;
          break;
        }
      }
    }

    if (!found) {
      container.innerHTML = '';
      const fallback = createFallback('Аудио недоступно', 'Аудио');
      container.appendChild(fallback);
    } else {
      container.appendChild(audio);
    }

    body.appendChild(container);
  }
};

// === ОТКРЫТИЕ ПОСТА (БЕЗ ИЗМЕНЕНИЙ) ===
window.openMediaPost = async function openMediaPost(postData) {
  isModalOpen = true;

  document.body.style.pointerEvents = 'none';
  document.body.style.opacity = '1';
  document.body.style.filter = 'none';

  modal.classList.remove('hidden');
  body.innerHTML = '';
  document.querySelector('.modal-controls').innerHTML = '';

  if (bgAudio) bgAudio.volume = 0.002;

  const postContainer = document.createElement('div');
  postContainer.className = 'post-modal-container';
  postContainer.style.cssText = `
    max-width: 90vw;
    margin: 0 auto;
    padding: 20px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.15);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
    position: relative;
  `;

  if (postData.title && postData.title.trim() !== '') {
    const titleElement = document.createElement('h2');
    titleElement.textContent = postData.title;
    titleElement.style.cssText = `
      margin: 0 0 15px 0;
      padding: 0;
      color: #333;
      text-align: center;
      font-size: 1.5em;
      font-weight: 600;
    `;
    postContainer.appendChild(titleElement);
  }

  let mediaType = 'image';
  let mediaSrc = postData.src;

  if (postData.src) {
    const extension = postData.src.split('.').pop().toLowerCase();
    if (['mp4', 'webm', 'ogg'].includes(extension)) {
      mediaType = 'video';
    } else if (['gif'].includes(extension)) {
      mediaType = 'gif';
    } else if (['mp3', 'wav', 'ogg'].includes(extension)) {
      mediaType = 'audio';
    }
  }

  if (mediaType === 'video') {
    const video = document.createElement('video');
    video.src = `videos/${mediaSrc}`;
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    video.style.cssText = `
      width: 100%;
      max-height: 60vh;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 15px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    `;
    postContainer.appendChild(video);
  } else if (mediaType === 'gif') {
    const gif = document.createElement('img');
    gif.src = `gifs/${mediaSrc}`;
    gif.style.cssText = `
      width: 100%;
      max-height: 60vh;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 15px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    `;
    postContainer.appendChild(gif);
  } else if (mediaType === 'audio') {
    const audio = document.createElement('audio');
    audio.src = `audio/${mediaSrc}`;
    audio.controls = true;
    audio.style.cssText = `width: 100%; margin-bottom: 15px;`;
    postContainer.appendChild(audio);
  } else {
    const image = document.createElement('img');
    image.src = `images/${mediaSrc}`;
    image.style.cssText = `
      width: 100%;
      max-height: 60vh;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 15px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    `;
    postContainer.appendChild(image);
  }

  if (postData.desc && postData.desc.trim() !== '') {
    const description = document.createElement('div');
    description.className = 'post-description';
    description.innerHTML = postData.desc;
    description.style.cssText = `
      font-size: 1.1em;
      line-height: 1.6;
      color: #333;
      margin-bottom: 15px;
      padding: 10px 0;
      border-bottom: 1px solid #eee;
    `;
    description.querySelectorAll('ul, ol').forEach(el => el.style.paddingLeft = '30px');
    postContainer.appendChild(description);
  }

  if (postData.link && postData.link.trim() !== '') {
    const linkContainer = document.createElement('div');
    linkContainer.className = 'post-link-container';
    linkContainer.style.cssText = `
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 10px;
    `;
    const linkIcon = document.createElement('span');
    linkIcon.textContent = '🔗';
    linkIcon.style.fontSize = '1.2em';
    const postLink = document.createElement('a');
    postLink.href = postData.link;
    postLink.textContent = 'Перейти по ссылке';
    postLink.target = '_blank';
    postLink.rel = 'noopener noreferrer';
    postLink.style.cssText = `color: #0066cc; text-decoration: none; font-weight: 500; flex: 1;`;
    postLink.addEventListener('click', (e) => { e.preventDefault(); window.open(postData.link, '_blank'); });
    linkContainer.appendChild(linkIcon);
    linkContainer.appendChild(postLink);
    postContainer.appendChild(linkContainer);
  }

  body.appendChild(postContainer);

  close.onclick = () => {
    modal.classList.add('hidden');
    isModalOpen = false;
    document.body.style.pointerEvents = 'auto';
    document.body.style.opacity = '1';
    document.body.style.filter = 'none';
    if (bgAudio) bgAudio.volume = 1.0;
  };

  modal.onclick = e => {
    if (e.target === modal) close.click();
  };
};

// === ЗАКРЫТИЕ МОДАЛКИ — ПОЛНАЯ ОЧИСТКА ===
close.onclick = () => {
  modal.classList.add('hidden');
  isModalOpen = false;
  document.body.style.pointerEvents = 'auto';
  document.body.style.opacity = '1';
  document.body.style.filter = 'none';

  // Пауза + сброс + очистка
  const media = body.querySelector('video, audio');
  if (media) {
    media.pause();
    media.currentTime = 0;
    if (media.src && media.src.startsWith('blob:')) {
      URL.revokeObjectURL(media.src);
    }
    media.removeAttribute('src');
    media.load();
  }

  if (bgAudio) bgAudio.volume = 1.0;

  if (window.location.hash.startsWith('#media=') || window.location.hash.startsWith('#post=')) {
    window.location.hash = '';
  }
};

modal.onclick = e => {
  if (e.target === modal) close.click();
};

// === ВСПОМОГАТЕЛЬНЫЕ ===
function handleMagnifierMove(e) {
  if (!magnifierCanvas) return;
  const rect = img.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const ctx = magnifierCanvas.getContext('2d');
  ctx.clearRect(0, 0, magnifierCanvas.width, magnifierCanvas.height);
  ctx.drawImage(img, x * 2 - 100, y * 2 - 100, 200, 200, 0, 0, magnifierCanvas.width, magnifierCanvas.height);
  magnifierCanvas.style.display = 'block';
  magnifierCanvas.style.left = (e.clientX - 100) + 'px';
  magnifierCanvas.style.top = (e.clientY - 100) + 'px';
}

function handleTouchMagnifierMove(e) {
  if (!magnifierCanvas) return;
  const touch = e.touches[0];
  const rect = img.getBoundingClientRect();
  const x = touch.clientX - rect.left;
  const y = touch.clientY - rect.top;
  const ctx = magnifierCanvas.getContext('2d');
  ctx.clearRect(0, 0, magnifierCanvas.width, magnifierCanvas.height);
  ctx.drawImage(img, x * 2 - 100, y * 2 - 100, 200, 200, 0, 0, magnifierCanvas.width, magnifierCanvas.height);
  magnifierCanvas.style.display = 'block';
  magnifierCanvas.style.left = (touch.clientX - 100) + 'px';
  magnifierCanvas.style.top = (touch.clientY - 100) + 'px';
}

function stopMagnifier() {
  if (magnifierCanvas) magnifierCanvas.style.display = 'none';
}

function getRandomUnavailableIcon() {
  return unavailableIcons[Math.floor(Math.random() * unavailableIcons.length)];
}