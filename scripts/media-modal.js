const modal = document.getElementById('media-modal');
const body = document.querySelector('.modal-body');
const close = document.querySelector('.modal-close');
const bgAudio = document.getElementById('bg-audio');

function checkImageExists(mediaSrc) {
  return new Promise((resolve) => {
    const img = new Image();
    const imagePath = `images/${mediaSrc}`;

    img.onload = () => {
      resolve(true); // изображение успешно загружено
    };

    img.onerror = () => {
      resolve(false); // изображение не найдено или ошибка загрузки
    };

    img.src = imagePath; // запускаем загрузку
  });
}

// === ГЛОБАЛЬНАЯ ФУНКЦИЯ: открытие медиа ===
window.openMediaModal = async function openMediaModal(type, src, posterSrc = null) {
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
        // Создаем холст для лупы
        magnifierCanvas = document.createElement('canvas');
        magnifierCanvas.width = 200;
        magnifierCanvas.height = 200;
        magnifierCanvas.style.position = 'absolute';
        magnifierCanvas.style.pointerEvents = 'none';
        magnifierCanvas.style.display = 'none';
        magnifierCanvas.style.borderRadius = '50%';
        body.appendChild(magnifierCanvas);

        // Добавляем обработчик движения мыши
        document.addEventListener('mousemove', handleMagnifierMove);
        document.addEventListener('mouseleave', stopMagnifier);

        // Добавляем обработчик тача
        img.addEventListener('touchmove', handleTouchMagnifierMove);
        img.addEventListener('touchend', stopMagnifier);
      } else {
        // Останавливаем лупу
        if (magnifierCanvas) {
          magnifierCanvas.remove();
        }
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
    clearBtn.onclick = () => {
      // Здесь нужно реализовать очистку
    };

    // Сохранить
    const saveBtn = document.createElement('button');
    saveBtn.textContent = '💾';
    saveBtn.className = 'save-btn';
    saveBtn.onclick = () => {
      const link = document.createElement('a');
      link.download = 'painted-' + src;
      link.href = img.src; // Просто ссылка на оригинал
      link.click();
    };

    controls.appendChild(zoomInBtn);
    controls.appendChild(zoomOutBtn);
    controls.appendChild(resetZoomBtn);
    controls.appendChild(magnifierBtn);
    controls.appendChild(emojiBtn);
    controls.appendChild(clearBtn);
    controls.appendChild(saveBtn);

    body.appendChild(img);
    document.querySelector('.modal-controls').appendChild(controls);
  }

  if (type === 'video') {
    // 1. Сразу показываем постер или плейсхолдер
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
      // Плейсхолдер, если постера нет
      const placeholder = document.createElement('div');
      placeholder.style.background = '#f0f0f0';
      placeholder.style.width = '90vw';
      placeholder.style.height = '50vh';
      placeholder.style.display = 'flex';
      placeholder.style.alignItems = 'center';
      placeholder.style.justifyContent = 'center';
      placeholder.innerHTML = '<p>Загрузка видео...</p>';
      container.appendChild(placeholder);
    }

    body.appendChild(container);

    // 2. Фоновая загрузка
    try {
      const { blobUrl, needsRelease } = await getVideoWithProgress(src, container);

      const video = document.createElement('video');
      video.src = blobUrl;
      video.controls = true;
      video.autoplay = true;
      video.playsInline = true;
      video.style.cssText = `
        width: 90vw;
        max-height: 70vh;
        filter: none;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        border-radius: 8px;
      `;

      if (posterSrc) video.poster = `images/${posterSrc}`;

      container.innerHTML = '';
      container.appendChild(video);

      // Освобождаем ресурсы при закрытии
      const originalCloseHandler = close.onclick;
      close.onclick = () => {
        if (needsRelease) URL.revokeObjectURL(blobUrl);
        modal.classList.add('hidden');
        isModalOpen = false;
        // Восстанавливаем фон
        document.body.style.pointerEvents = 'auto';
        document.body.style.opacity = '1';
        document.body.style.filter = 'none';
        const video = body.querySelector('video');
        if (video) video.pause();
        // Восстанавливаем громкость фоновой музыки
        if (bgAudio) {
          bgAudio.volume = 1.0;
        }
        if (originalCloseHandler) originalCloseHandler();
      };
    } catch (e) {
      container.innerHTML = '<p>Видео недоступно</p>';
    }
  }

  if (type === 'text') {
    const p = document.createElement('p');
    // ИЗМЕНЕНИЕ: используем innerHTML вместо textContent
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

  if (type === 'audio') {
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

    // Обложка
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

    // Аудио
    const audio = document.createElement('audio');
    audio.controls = true;
    audio.style.width = '100%';

    // Поддержка всех форматов
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
      // Попробуем добавить расширение
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
      audio.autoplay = false;
      container.appendChild(audio);
    }

    body.appendChild(container);
  }
};

// === ПРОГРЕСС ЗАГРУЗКИ ВИДЕО ===
async function getVideoWithProgress(src, container) {
  // 1. Проверяем кэш
  if (videoCache.has(src)) {
    return {
      blobUrl: videoCache.get(src).src,
      needsRelease: false
    };
  }

  // 2. Показываем прогресс
  const progress = document.createElement('div');
  progress.style.width = '100%';
  progress.style.height = '5px';
  progress.style.background = '#e0e0e0';
  progress.style.marginTop = '10px';

  const progressBar = document.createElement('div');
  progressBar.style.height = '100%';
  progressBar.style.background = '#4CAF50';
  progressBar.style.width = '0%';
  progress.appendChild(progressBar);

  container.appendChild(progress);

  // 3. Загружаем с прогрессом
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.open('GET', `videos/${src}`);

    xhr.onprogress = (e) => {
      if (e.lengthComputable) {
        const percent = Math.round((e.loaded / e.total) * 100);
        progressBar.style.width = `${percent}%`;
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        const blob = xhr.response;
        const blobUrl = URL.createObjectURL(blob);
        addToCache(src, blob);
        resolve({ blobUrl, needsRelease: true });
      } else {
        console.error('HTTP error while loading video:', xhr.status, src);
        reject(new Error('Failed to load'));
      }
    };

    xhr.onerror = () => {
      console.error('Network error while loading video:', src);
      reject(new Error('Network error'));
    };
    xhr.send();
  });
}

// === ОТКРЫТИЕ ПОСТА ===
window.openMediaPost = async function openMediaPost(postData) {
  isModalOpen = true;

  // Убираем все эффекты на фоне
  document.body.style.pointerEvents = 'none';
  document.body.style.opacity = '1';
  document.body.style.filter = 'none';

  modal.classList.remove('hidden');
  body.innerHTML = '';
  document.querySelector('.modal-controls').innerHTML = '';

  // Уменьшаем громкость фоновой музыки
  if (bgAudio) {
    bgAudio.volume = 0.002;
  }

  // Проверяем, является ли desc полноценным HTML-сайтом
  const isFullHtml = postData.desc && /<style\b|<html\b|<\!doctype|<body\b/i.test(postData.desc.trim());

  if (isFullHtml) {
    // === РЕЖИМ: ПОЛНЫЙ HTML-САЙТ В IFRAME ===

    // Создаём iframe
    const iframe = document.createElement('iframe');
    iframe.style.cssText = `
      width: 100%;
      height: 90vh; /* Занимает почти весь экран, но оставляет место для крестика */
      border: none;
      background: transparent;
      margin: 0;
      padding: 0;
      display: block;
    `;
    iframe.setAttribute('scrolling', 'yes'); // Для старых браузеров
    iframe.setAttribute('frameborder', '0');

    // Важно: форсируем desktop viewport внутри iframe
    let htmlWithForcedViewport = postData.desc;

    // Если есть <head>, вставляем метатег viewport для десктопа
    if (htmlWithForcedViewport.includes('<head>')) {
      htmlWithForcedViewport = htmlWithForcedViewport.replace(
        '<head>',
        '<head><meta name="viewport" content="width=1200, initial-scale=1.0">'
      );
    } else if (htmlWithForcedViewport.includes('<html')) {
      // Если <head> нет, но есть <html>, вставляем в начало <head> с viewport
      htmlWithForcedViewport = htmlWithForcedViewport.replace(
        '<html',
        '<html><head><meta name="viewport" content="width=1200, initial-scale=1.0"></head>'
      );
    } else {
      // Если вообще нет структуры — оборачиваем
      htmlWithForcedViewport = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta name="viewport" content="width=1200, initial-scale=1.0">
          </head>
          <body>
            ${htmlWithForcedViewport}
          </body>
        </html>
      `;
    }

    // Устанавливаем содержимое
    iframe.srcdoc = htmlWithForcedViewport;

    // Контейнер с отступами по бокам и сверху/снизу
    const iframeContainer = document.createElement('div');
    iframeContainer.style.cssText = `
      width: 95vw;
      height: 90vh;
      margin: 2.5vh auto 0;
      padding: 10px;
      background: transparent;
      display: flex;
      justify-content: center;
      align-items: flex-start;
    `;
    iframeContainer.appendChild(iframe);

    body.appendChild(iframeContainer);

    // Сбрасываем стили body модалки
    body.style.cssText = `
      margin: 0;
      padding: 0;
      background: transparent;
      overflow: hidden;
      display: flex;
      justify-content: center;
    `;

    // Подгоняем высоту при загрузке (если понадобится в будущем)
    iframe.onload = () => {
      // Можно добавить динамическую подгонку высоты, если нужно
      // Но пока фиксированная высота — стабильнее
    };

  } else {
    // === РЕЖИМ: ОБЫЧНЫЙ ПОСТ ===

    const postContainer = document.createElement('div');
    postContainer.className = 'post-modal-container';
    postContainer.style.cssText = `
      max-width: 90vw;
      max-height: 85vh; /* Ограничиваем высоту, чтобы не выходил за экран */
      margin: 0 auto;
      padding: 20px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.15);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255,255,255,0.2);
      position: relative;
      overflow-y: auto; /* Добавляем скролл! */
      -webkit-overflow-scrolling: touch; /* Для iOS */
      touch-action: pan-y; /* Для тач-устройств */
    `;

    // Заголовок
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

    // Медиа
    let mediaType = 'image';
    let mediaSrc = postData.src;

    if (postData.src) {
      const extension = postData.src.split('.').pop().toLowerCase();
      if (['mp4', 'webm', 'ogg'].includes(extension)) mediaType = 'video';
      else if (['gif'].includes(extension)) mediaType = 'gif';
      else if (['mp3', 'wav', 'ogg'].includes(extension)) mediaType = 'audio';
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
    } else if (mediaSrc) {
      const image = document.createElement('img');
      //image.src = `images/${mediaSrc}`;

      const exists = await checkImageExists(mediaSrc);
      if (exists) {
        image.src = `images/${mediaSrc}`;
        console.log('Изображение существует!');
      } else {
        if (!sessionRandomImage) {
          sessionRandomImage = unavailableIcons[Math.floor(Math.random() * unavailableIcons.length)];
        }
        image.src = `images/${sessionRandomImage}`;
        console.log(`Изображение не найдено. ${image.src}`);
      }

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

    // Описание
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
      description.querySelectorAll('ul, ol').forEach(el => {
        el.style.paddingLeft = '30px';
      });
      postContainer.appendChild(description);
    }

    // Ссылка
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
      postLink.style.cssText = `
        color: #0066cc;
        text-decoration: none;
        font-weight: 500;
        flex: 1;
      `;
      postLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(postData.link, '_blank');
      });

      linkContainer.appendChild(linkIcon);
      linkContainer.appendChild(postLink);
      postContainer.appendChild(linkContainer);
    }

    body.appendChild(postContainer);
  }

  // Обработчики закрытия — общие
  close.onclick = () => {
    modal.classList.add('hidden');
    isModalOpen = false;
    document.body.style.pointerEvents = 'auto';
    document.body.style.opacity = '1';
    document.body.style.filter = 'none';

    // === ОСТАНОВКА МЕДИА В ОБЫЧНОМ РЕЖИМЕ ===
    body.querySelectorAll('video, audio').forEach(media => {
      media.pause();
      media.currentTime = 0;
    });

    // === ОСТАНОВКА МЕДИА В IFRAME (если есть) ===
    const iframe = body.querySelector('iframe');
    if (iframe && iframe.contentDocument) {
      const iframeDoc = iframe.contentDocument;
      const iframeMedia = iframeDoc.querySelectorAll('video, audio');
      iframeMedia.forEach(media => {
        media.pause();
        media.currentTime = 0;
      });
      // Опционально: удаляем iframe, чтобы точно убить контекст
      iframe.remove();
    }

    // Восстанавливаем громкость
    if (bgAudio) {
      bgAudio.volume = 1.0;
    }

    // Очищаем хеш
    if (window.location.hash.startsWith('#media=') || window.location.hash.startsWith('#post=')) {
      window.location.hash = '';
    }
  };
}

// === ЗАКРЫТИЕ МОДАЛКИ — С ОСТАНОВКОЙ ВСЕХ МЕДИА ===
close.onclick = () => {
  modal.classList.add('hidden');
  isModalOpen = false;
  document.body.style.pointerEvents = 'auto';
  document.body.style.opacity = '1';
  document.body.style.filter = 'none';

  // Пауза всем медиа
  body.querySelectorAll('video, audio').forEach(media => {
    media.pause();
    media.currentTime = 0;
  });

  // Восстанавливаем громкость
  if (bgAudio) {
    bgAudio.volume = 1.0;
  }

  // Очищаем хеш
  if (window.location.hash.startsWith('#media=') || window.location.hash.startsWith('#post=')) {
    window.location.hash = '';
  }
};

modal.onclick = e => {
  if (e.target === modal) close.click();
};

// === ОБРАБОТЧИКИ ЛУПЫ ===
function handleMagnifierMove(e) {
  if (!magnifierCanvas) return;

  const rect = img.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const ctx = magnifierCanvas.getContext('2d');
  ctx.clearRect(0, 0, magnifierCanvas.width, magnifierCanvas.height);

  ctx.drawImage(
    img,
    x * 2 - 100, y * 2 - 100, 200, 200,
    0, 0, magnifierCanvas.width, magnifierCanvas.height
  );

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

  ctx.drawImage(
    img,
    x * 2 - 100, y * 2 - 100, 200, 200,
    0, 0, magnifierCanvas.width, magnifierCanvas.height
  );

  magnifierCanvas.style.display = 'block';
  magnifierCanvas.style.left = (touch.clientX - 100) + 'px';
  magnifierCanvas.style.top = (touch.clientY - 100) + 'px';
}

function stopMagnifier() {
  if (magnifierCanvas) {
    magnifierCanvas.style.display = 'none';
  }
}

// === ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ===
function createFallback(title, type = 'Медиа') {
  const el = document.createElement('div');
  el.style.cssText = `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f8f9fa;
    border-radius: 12px;
    gap: 10px;
    text-align: center;
    color: #555;
    font-size: 1.1em;
    padding: 15px;
  `;
  const icon = document.createElement('img');
  icon.src = `images/${getRandomUnavailableIcon()}`;
  icon.style.cssText = 'width: 70px; height: 70px; opacity: 0.6;';
  const text = document.createElement('div');
  text.innerHTML = `<strong>${type}</strong><br><small>${title || 'Недоступно'}</small>`;
  el.append(icon, text);
  return el;
}

function getRandomUnavailableIcon() {
  return unavailableIcons[Math.floor(Math.random() * unavailableIcons.length)];
}