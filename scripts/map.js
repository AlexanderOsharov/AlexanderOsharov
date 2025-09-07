const map = document.getElementById('map');
const avatars = [
  { src: 'me-icon.jpg', isMom: true, name: 'Муа' },
  { src: 'HM-icon.png', video: 'super_optimized_optimized_HM.mp4', poster: 'HM-poster.png', name: 'History Moment' },
  { src: 'BlueBird-icon.jpg', video: 'super_optimized_optimized_BlueBird.mp4', poster: 'BlueBird-icon.jpg', name: 'Синяя птица' },
  { src: 'HMAI-icon.png', video: 'super_optimized_optimized_HMAI.mp4', poster: 'HMAI-poster.jpg', name: 'HMAI' },
  { src: 'PredProf-icon.png', video: 'super_optimized_optimized_PredProf.mp4', poster: 'PredProf-poster.png', name: 'ПредПроф' },
  { src: 'HM-demo-icon.png', video: 'super_optimized_optimized_HM-demo.mp4', poster: 'HM-icon.png', name: 'Демонстрация работы HM' },
  { src: 'improv-icon2.png', video: 'super_optimized_optimized_improv.mp4', poster: 'improv-poster.png', name: 'Improv club' },
];

// Состояние приложения
window.nodes = [];
let globalPointerId = null; // Для отслеживания активного указателя

class AvatarNode {
  constructor(el, avatarData) {
    this.el = el;
    this.data = avatarData;
    this.size = avatarData.isMom ? 160 : 90;
    this.x = 0;
    this.y = 0;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.isDragging = false;
    this.dragOffsetX = 0;
    this.dragOffsetY = 0;
    this.currentPointerId = null;
    this.videoLoaded = false;
    this.videoLoading = false;

    // Инициализация позиции
    this.findInitialPosition();

    // Настройка элемента
    this.setupElement();

    // Обработчики событий
    this.setupEventListeners();

    // Турбо-прелоад при создании
    if (avatarData.video && !avatarData.isMom) {
      this.turboPreloadVideo();
    }

    // Начинаем загрузку видео сразу для ближайших аватарок
    if (avatarData.video && !avatarData.isMom) {
      this.checkDistanceAndPreload();
    }

    // Ленивая загрузка видео при приближении
    if (avatarData.video && !avatarData.isMom) {
      this.setupLazyVideoLoad();
    }
  }

  turboPreloadVideo() {
    if (this.videoLoaded || videoCache.has(this.data.video)) return;

    // Фоновая загрузка без блокировки UI
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.open('GET', `videos/${this.data.video}`, true);
    xhr.onload = () => {
      if (xhr.status === 200) {
        const blobUrl = URL.createObjectURL(xhr.response);
        videoCache.set(this.data.video, {
          src: blobUrl,
          blob: xhr.response
        });
        this.videoLoaded = true;
      }
    };
    xhr.send();
  }

  checkDistanceAndPreload() {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const distance = Math.sqrt(
      Math.pow(this.x + this.size / 2 - centerX, 2) +
      Math.pow(this.y + this.size / 2 - centerY, 2)
    );

    if (distance < window.innerWidth * 0.8) {
      this.preloadVideo();
    } else {
      setTimeout(() => this.checkDistanceAndPreload(), 1000);
    }
  }

  preloadVideo() {
    if (this.videoLoading || this.videoLoaded) return;
    this.videoLoading = true;

    // Добавляем в очередь с высоким приоритетом
    preloadQueue.add(this.data.video, 'high');

    // Альтернативно: предзагружаем только метаданные
    const video = document.createElement('video');
    video.src = `videos/${this.data.video}#t=0.1`; // Только первый кадр
    video.preload = 'metadata';

    video.onloadedmetadata = () => {
      this.videoLoaded = true;
      videoCache.set(this.data.video, {
        src: video.src,
        blob: null
      });
    };

    video.onerror = () => {
      this.videoLoading = false;
    };
  }

  setupLazyVideoLoad() {
    // Проверяем расстояние до центра экрана каждые 500мс
    this.lazyLoadInterval = setInterval(() => {
      if (this.videoLoaded || this.videoLoading) {
        clearInterval(this.lazyLoadInterval);
        return;
      }

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const distance = Math.sqrt(
        Math.pow(this.x + this.size / 2 - centerX, 2) +
        Math.pow(this.y + this.size / 2 - centerY, 2)
      );

      // Если аватарка близко к центру экрана, начинаем загрузку
      if (distance < Math.max(window.innerWidth, window.innerHeight) * 0.6) {
        this.preloadVideo();
        clearInterval(this.lazyLoadInterval);
      }
    }, 500);
  }

  findInitialPosition() {
    let validPosition = false;
    let attempts = 0;
    const maxAttempts = 100;

    while (!validPosition && attempts < maxAttempts) {
      this.x = Math.random() * (window.innerWidth - this.size);
      this.y = Math.random() * (window.innerHeight * 0.7 - this.size);

      validPosition = window.nodes.every(node => {
        const dx = this.x - node.x;
        const dy = this.y - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance > (this.size + node.size) / 2 + 20;
      });

      attempts++;
    }
  }

  setupElement() {
    this.el.style.position = 'absolute';
    this.el.style.width = `${this.size}px`;
    this.el.style.height = `${this.size}px`;
    this.el.style.borderRadius = '50%';
    this.el.style.overflow = 'hidden';
    this.el.style.border = this.data.isMom ? '3px solid #f4a261' : '3px solid #e63946';
    this.el.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
    this.el.style.zIndex = this.data.isMom ? '1000' : '100';
    this.el.style.transform = `translate(${this.x}px, ${this.y}px)`;
    this.el.style.willChange = 'transform';
    this.el.style.userSelect = 'none';
    this.el.style.touchAction = 'none';
    this.el.style.cursor = 'pointer';

    const img = document.createElement('img');
    img.src = `images/${this.data.src}`;
    img.alt = this.data.name;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    img.style.pointerEvents = 'none';
    this.el.appendChild(img);
  }

  setupEventListeners() {
    this.el.addEventListener('pointerdown', this.handlePointerDown.bind(this));
  }

  updatePosition() {
    this.el.style.transform = `translate(${this.x}px, ${this.y}px)`;
  }

  move() {
    if (this.isDragging) return;

    // Обновление позиции
    this.x += this.vx;
    this.y += this.vy;

    // Границы экрана
    const maxX = window.innerWidth - this.size;
    const maxY = window.innerHeight * 0.7 - this.size;

    if (this.x < 0) { this.x = 0; this.vx *= -0.5; }
    if (this.x > maxX) { this.x = maxX; this.vx *= -0.5; }
    if (this.y < 0) { this.y = 0; this.vy *= -0.5; }
    if (this.y > maxY) { this.y = maxY; this.vy *= -0.5; }

    // Коллизии с другими аватарками
    this.handleCollisions();

    this.updatePosition();
  }

  handleCollisions() {
    window.nodes.forEach(other => {
      if (other === this || other.isDragging) return;

      const dx = this.x - other.x;
      const dy = this.y - other.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const minDistance = (this.size + other.size) / 2 + 10;

      if (distance < minDistance) {
        const angle = Math.atan2(dy, dx);
        const force = (minDistance - distance) * 0.5;

        // Отталкиваем аватарки
        this.x += Math.cos(angle) * force * 0.5;
        this.y += Math.sin(angle) * force * 0.5;
        other.x -= Math.cos(angle) * force * 0.5;
        other.y -= Math.sin(angle) * force * 0.5;

        // Обновляем скорости
        const speed = 0.3;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        other.vx = -Math.cos(angle) * speed;
        other.vy = -Math.sin(angle) * speed;

        other.updatePosition();
      }
    });
  }

  handlePointerDown(e) {
    // Игнорируем другие указатели, если уже есть активный
    if (globalPointerId !== null && globalPointerId !== e.pointerId) return;

    e.preventDefault();
    e.stopPropagation();

    this.isDragging = true;
    globalPointerId = e.pointerId;
    this.currentPointerId = e.pointerId;

    const rect = this.el.getBoundingClientRect();
    this.dragOffsetX = e.clientX - rect.left;
    this.dragOffsetY = e.clientY - rect.top;

    // Останавливаем движение
    this.vx = 0;
    this.vy = 0;

    // Поднимаем элемент выше остальных
    this.el.style.zIndex = '2000';

    // Добавляем глобальные обработчики
    document.addEventListener('pointermove', this.handlePointerMoveBound = (e) => {
      if (e.pointerId === this.currentPointerId) {
        this.handlePointerMove(e);
      }
    });

    document.addEventListener('pointerup', this.handlePointerUpBound = (e) => {
      if (e.pointerId === this.currentPointerId) {
        this.handlePointerUp(e);
      }
    });

    // Для touch-устройств добавляем дополнительный обработчик
    if (e.pointerType === 'touch') {
      document.addEventListener('pointercancel', this.handlePointerUpBound);
    }
  }

  handlePointerMove(e) {
    if (!this.isDragging || e.pointerId !== this.currentPointerId) return;

    // Обновляем позицию с учетом смещения
    const clientX = e.clientX || e.touches?.[0]?.clientX;
    const clientY = e.clientY || e.touches?.[0]?.clientY;

    if (clientX === undefined || clientY === undefined) return;

    this.x = clientX - this.dragOffsetX;
    this.y = clientY - this.dragOffsetY;

    // Границы экрана
    const maxX = window.innerWidth - this.size;
    const maxY = window.innerHeight * 0.7 - this.size;
    this.x = Math.max(0, Math.min(this.x, maxX));
    this.y = Math.max(0, Math.min(this.y, maxY));

    // Коллизии при перетаскивании
    this.handleDragCollisions();

    this.updatePosition();
  }

  handleDragCollisions() {
    window.nodes.forEach(other => {
      if (other === this || other.isDragging) return;

      const dx = this.x - other.x;
      const dy = this.y - other.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const minDistance = (this.size + other.size) / 2 + 10;

      if (distance < minDistance) {
        const angle = Math.atan2(dy, dx);
        const force = (minDistance - distance) * 0.8;

        // Сдвигаем только перетаскиваемую аватарку
        this.x += Math.cos(angle) * force;
        this.y += Math.sin(angle) * force;

        // Немного отталкиваем другую аватарку
        other.x -= Math.cos(angle) * force * 0.3;
        other.y -= Math.sin(angle) * force * 0.3;
        other.vx = -Math.cos(angle) * 0.2;
        other.vy = -Math.sin(angle) * 0.2;

        other.updatePosition();
      }
    });
  }

  handlePointerUp(e) {
    if (!this.isDragging || e.pointerId !== this.currentPointerId) return;

    this.isDragging = false;
    globalPointerId = null;
    this.currentPointerId = null;
    this.el.style.zIndex = this.data.isMom ? '1000' : '100';

    // Возвращаем небольшую скорость после перетаскивания
    const clientX = e.clientX || e.changedTouches?.[0]?.clientX;
    const clientY = e.clientY || e.changedTouches?.[0]?.clientY;

    if (clientX && clientY) {
      this.vx = (clientX - this.dragOffsetX - this.x) * 0.05;
      this.vy = (clientY - this.dragOffsetY - this.y) * 0.05;
    }

    // Удаляем обработчики
    document.removeEventListener('pointermove', this.handlePointerMoveBound);
    document.removeEventListener('pointerup', this.handlePointerUpBound);
    document.removeEventListener('pointercancel', this.handlePointerUpBound);
  }

  openMedia() {
    if (this.data.isMom) {
      // Создаем эффект хлопушки
      this.createPopEffect();

      setTimeout(() => {
        window.open('https://github.com/AlexanderOsharov', '_blank');
      }, 300);

      // Запускаем текстовый контент после небольшой задержки для эффекта
      //setTimeout(() => {
      //  openMediaModal('text', 'Путник, зачем ты в мой код влез, <br>С грязной обувью, в чат без паролей? <br>Ты не юзер, ты — DDoS-сезон, <br>Ты как NullPointerException в продакшен-сезон. <br><br>Я тут тимлид, фулстак, гуру, профи, <br>Пишу на Kotlin Multiplatform с 5 утра, <br>Мой бэк — Spring Boot, но с душой Node.js, <br>А фронт — Svelte с каплей React-анти-крас. <br><br>Ты думал, сайт — просто кнопка «ОК»? <br>А я тут три года ковырял WebAssembly, <br>Чтоб твой fetch() не упал в CORS, <br>И bundle.js не весил, как docker image в терабайтах — ах! <br><br>Ты — просто путник, а я — архитект, <br>С CI/CD в жилах и deadlock в душе. <br>Мой бэкенд — не хостинг, а Kubernetes-сект, <br>Где pod родится — и сразу в crashLoopBackOff, как в кеше. <br><br>Ты зашёл на болото? Ну что ж, повезло. <br>Это не сайт — это monorepo моей боли. <br>Здесь каждый div — это microservice-тепло, <br>А 404 — это метафора твоей цели. <br><br>Я ловлю твой session в Redis, как в ловушку, <br>JWT твой просрочен — ты даже не admin. <br>Ты хотел контент? Вот тебе GraphQL mutation, <br>А в ответ — 502 Bad Gateway и nginx-дым. <br><br>Ты думал, тут просто? Тут OAuth2 с триггером, <br>WebSockets шепчут: «Уйди, не твой уровень». <br>Я в PostgreSQL храню твои логи, как грехи, <br> А в Kafka — поток твоих click-невеж. <br><br>Путник, ты в sandbox, но думаешь — луг? <br>А я тут stress test провожу на живом. <br>Ты — не юзер, ты edge case, мой друг, <br>Ты — race condition в моём concurrent-историй. <br><br>Так что, если выжил — считай, повезло. <br>Нажми back, пока GC не собрал тебя в кучу. <br>Мой сайт — не болото. Мой сайт — это prod. <br>А ты... ты просто bug report в моей ночи. <br><br><br> — Тимлид, <br><br>(который даже Hello World пишет через dependency injection)');
      //}, 300);
    } else if (this.data.video) {
      openMediaModal('video', this.data.video, this.data.poster);
    }
  }

  createPopEffect() {
    const effectCount = 12; // Количество безделушек
    const colors = ['#ff00ff', '#00ffff', '#ffff00', '#ff0080', '#00ff80']; // Неоновые цвета

    for (let i = 0; i < effectCount; i++) {
      const effect = document.createElement('div');
      effect.className = 'pop-effect';

      // Позиционирование от центра аватара
      const centerX = this.x + this.size / 2;
      const centerY = this.y + this.size / 2;

      // Случайное направление и расстояние
      const angle = (i / effectCount) * Math.PI * 2;
      const distance = 130 + Math.random() * 50;
      const speed = 1 + Math.random() * 2;

      // Стили для безделушки
      effect.style.position = 'absolute';
      effect.style.width = '8px';
      effect.style.height = '8px';
      effect.style.borderRadius = '50%';
      effect.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      effect.style.boxShadow = `0 0 10px ${colors[Math.floor(Math.random() * colors.length)]}, 
                             0 0 20px ${colors[Math.floor(Math.random() * colors.length)]}`;
      effect.style.left = `${centerX}px`;
      effect.style.top = `${centerY}px`;
      effect.style.zIndex = '3000';
      effect.style.pointerEvents = 'none';

      document.body.appendChild(effect);

      // Анимация полета
      const animation = effect.animate([
        {
          transform: `translate(0, 0) scale(1)`,
          opacity: 1
        },
        {
          transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`,
          opacity: 0
        }
      ], {
        duration: 800 + Math.random() * 400,
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        fill: 'forwards'
      });

      // Удаление после анимации
      animation.onfinish = () => {
        effect.remove();
      };
    }
  }
}

function initMap() {
  if (!manifest) {
    setTimeout(initMap, 100);
    return;
  }

  map.innerHTML = '';
  window.nodes = [];

  // Создаем аватарки
  avatars.forEach(avatarData => {
    if (!manifest.images.includes(avatarData.src)) return;

    const div = document.createElement('div');
    const node = new AvatarNode(div, avatarData);
    window.nodes.push(node);
    map.appendChild(div);

    // Обработчик клика
    div.addEventListener('click', (e) => {
      if (!node.isDragging) {
        node.openMedia();
      }
    });
  });

  // Запускаем анимацию
  function animate() {
    window.nodes.forEach(node => node.move());
    requestAnimationFrame(animate);
  }
  animate();
}

// Инициализация
setTimeout(() => {
  if (typeof initMap === 'function') initMap();
}, 100);