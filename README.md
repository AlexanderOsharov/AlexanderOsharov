<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/style.css">
</head>
<body>
<div class="logo">
    <img src="assets/logo.png" alt="My Logo">
</div>
<section class="skills">
    <h2>Мои навыки</h2>
    <ul>
        <li>Разработка мобильных приложений для Android на языке Kotlin и Java</li>
        <li>Написание сервисов на Python</li>
        <li>Опыт использования JavaScript для создания веб-сайтов</li>
        <li>3D моделирование на Blender</li>
    </ul>
    <h2>Опыт работы</h2>
    <p>Я работал как backend, frontend и fullstack разработчик на протяжении нескольких лет. Я упорен, целеустремленный и надежный, и я готов работать в команде, чтобы достичь общей цели.</p>
</section>

<div class="social-icons">
    <a href="https://vk.com" target="_blank" class="social-icon vk">
        <img src="assets/vk.png" alt="VK">
    </a>
    <a href="https://telegram.org" target="_blank" class="social-icon telegram">
        <img src="assets/telegram.png" alt="Telegram">
    </a>
    <a href="https://www.whatsapp.com" target="_blank" class="social-icon whatsapp">
        <img src="assets/whatsapp.png" alt="WhatsApp">
    </a>
</div>
    <style>
    body {
  font-family: Arial, sans-serif;
  background: linear-gradient(to bottom right, #f7f7f7 0%, #83a4d4 50%, #b6fbff 100%);
  color: #333;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo img {
  animation: rotate 2s infinite ease-in-out;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  box-shadow: 3px 3px 3px #ccc;
}

.skills {
    border: 2px solid black;
    padding: 30px;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 20px;
    margin-bottom: 50px;
    width: 100%;
    max-width: 700px;
}

.skills li {
  border-bottom: 1px solid #999;
  padding: 5px 0;
}

.skills li:last-child {
  border-bottom: none;
}

.skills li:hover {
    color: blue;
    background-color: #ddd;
    cursor: pointer;
}

.skills h2 {
  margin-top: 20px;
  text-shadow: 1px 1px 1px black;
}

.3d-model {
  width: 500px;
  height: 500px;
  margin: 0 auto 50px;
  box-shadow: 3px 3px 3px #ccc;
  border-radius: 20px;
}

.social-icons {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0 5px;
  overflow: hidden;
  transition: all 0.3s;
}

.social-icon img {
  height: 100%;
  width: 100%;
}

.social-icon:hover {
  transform: scale(1.1);
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.skills li {
  transition: all 0.3s;
}
.skills li:hover {
  color: blue;
  background-color: #ddd;
  cursor: pointer;
  transform: translateX(10px);
}
.skills h2 {
  margin-top: 20px;
  text-shadow: 1px 1px 1px black;
  animation: shadow 2s infinite ease-in-out;
}

@keyframes shadow {
  0% {
    text-shadow: 1px 1px 1px black;
  }
  50% {
    text-shadow: 3px 3px 3px black;
  }
  100% {
    text-shadow: 1px 1px 1px black;
  }
}
body {
  animation: gradient 10s infinite ease-in-out;
}

@keyframes gradient {
  0% {
    background: linear-gradient(to bottom right, #f7f7f7 0%, #83a4d4 50%, #b6fbff 100%);
  }
  50% {
    background: linear-gradient(to bottom right, #b6fbff 0%, #83a4d4 50%, #f7f7f7 100%);
  }
  100% {
    background: linear-gradient(to bottom right, #f7f7f7 0%, #83a4d4 50%, #b6fbff 100%);
  }
}

    </style>
</body>
</html>
