const posts = [
  {
    src: 'HM-post.jpg',
    link: 'https://alexanderosharov.github.io/HM/  ',
    desc: 'HistoryMoment — инновационное решение для цифрового культурного взаимодействия с историей Москвы.<br>Платформа предоставляет уникальную возможность погружения в культурное наследие столицы через интерактивную карту, преобразуя знакомство с историческими объектами в увлекательное образовательное путешествие.Каждая точка на карте становится живой историей, где пользователи могут исследовать скрытые уголки столицы.<br>Техническая реализация основана на современных подходах: Kotlin с clean architecture, MVVM и архитектурными паттернами, обеспечивающими масштабируемость и поддержку enterprise- стандартов.Firebase выступает в роли основного хранилища данных и backend - логики, обеспечивая высокую доступность и надежность.<br>Решение включает ключевые функции: offline - режим, push - уведомления, гибкую систему контента и аналитику, что позволяет эффективно масштабировать функционал без потери качества.Платформа обеспечивает высокую пользовательскую вовлеченность за счет интерактивного подхода к представлению исторических данных.<br>HistoryMoment представляет собой стратегический продукт, который перестраивает взаимодействие между пользователем и историей, создавая культурный геймифицированный опыт с высоким уровнем вовлеченности и масштабируемостью.',
    title: 'History Moment'
  },
  {
    src: 'BlueBird-post.png',
    link: 'https://github.com/AlexanderOsharov/BlueBird/blob/main/README.md  ',
    desc: '<h1>BlueBird — Immersive 2D-Experience в эпоху советской космической программы</h1> <h2>Стратегический продукт для образовательной и культурной индустрии</h2> <h3>Архитектура и концепция</h3> <p>Интерактивная 2D-игра, реализующая уникальный образовательный подход к истории советской космической программы. Проект представляет собой гибрид игровой механики и исторического контекста, где игроки взаимодействуют с симуляцией реальных космических событий через интеллектуальные головоломки и физические механизмы.</p> <h3>Техническая реализация</h3> <p>Реализация на Unity 2022.x с использованием C# и 2D Physics Engine обеспечивает высокую производительность и стабильность. Архитектура проекта включает:</p> <ul><li>Систему управления ресурсами: управление весом, балансом и физическими свойствами элементов</li><li>Систему классификации объектов: иерархическая структура сборки обломков с различной ценностью</li><li>Интерактивную среду: Tilemap и Sprites для создания игровых миров</li><li>UI/UX интеграцию: TextMeshPro и UI Toolkit для профессионального оформления</li></ul> <h3>Ключевые особенности</h3> <ul><li>Образовательная игровая механика: симуляция реальных космических процессов через головоломки</li><li>Историческая точность: визуальный стиль вдохновлён эстетикой советских ракет и космических аппаратов</li><li>Многопользовательская архитектура: готовность к расширению с функцией мультиплеера</li><li>Масштабируемая структура уровней: гибкая система контента для добавления новых сценариев</li></ul> <h3>Коммерческая ценность</h3> <p>Проект демонстрирует высокий уровень интеграции между образовательными целями и игровыми механиками, обеспечивая:</p> <ul><li>Высокую степень вовлечённости пользователей</li><li>Возможность адаптации под образовательные программы</li><li>Стратегическую ценность для культурных учреждений</li><li>Потенциал для расширения в мобильные и 3D-версии</li></ul> <h3>Интеграционные возможности</h3> <p>Платформа предоставляет готовую архитектуру для:</p> <ul><li>Развертывания в образовательных средах</li><li>Интеграции с музеями и культурными институтами</li><li>Создания дополнительного контента</li><li>Мобильной версии с сохранением игровой механики</li></ul> <h3>Целевая аудитория</h3> <p>Идеально подходит для:</p> <ul><li>Образовательных учреждений</li><li>Культурных центров</li><li>Музеев истории космонавтики</li><li>Проектов цифровой культуры</li></ul> <h3>Технологический стек</h3> <p>Unity 2022.x + C# + 2D Physics Engine + Tilemap + Sprites + TextMeshPro + UI Toolkit</p> <h3>Перспективы развития</h3> <p>Готовность к расширению с функциями мультиплеера, режима "Выживание", 3D-версии и мобильной платформы обеспечивает долгосрочную стратегическую ценность проекта.</p>',
    title: 'Синяя птица'
  },
  {
    src: 'HMAI-post.png',
    link: 'https://github.com/AlexanderOsharov/historical_text_classifier/blob/main/README.md  ',
    desc: '<h1>Historical Text Classifier (by HistoryMoment)</h1><br><h2>Архитектура и функциональность</h2><br><p>Инструмент для автоматической классификации и анализа исторических текстов с фокусом на тематическое извлечение ключевой информации. Проект реализует машинное обучение для обработки литературных и исторических источников, позволяя эффективно находить и анализировать тематически значимые отрывки.</p><br><h2>Техническая реализация</h2><br><p>Основной компонент — класс RandomForestTextClassifier, построенный на алгоритме случайного леса для многоклассовой классификации исторических текстов. Модель обучается на данных из dataset.json и обеспечивает высокую точность предсказаний с возможностью получения вероятностных оценок классов.</p><br><h2>Ключевые возможности</h2><br><ul>    <li>Классификация текстов: автоматическое определение тематических категорий исторических материалов</li>    <li>Извлечение ключевых отрывков: выделение значимых фрагментов с оценкой важности</li>    <li>Автоматическое расширение датасета: получение дополнительных данных из Wikipedia по заданным запросам</li>    <li>Гибкая настройка параметров: возможность регулирования порогов и параметров извлечения</li></ul><br><h2>Интеграционные особенности</h2><br><p>Установка через pip с использованием git-репозитория обеспечивает прямой доступ к актуальной версии инструмента. Реализация включает обработку различных кодировок текстовых файлов и интеграцию с википедийными источниками для расширения базы знаний.</p><br><h2>Применение</h2><br><p>Инструмент предназначен для исследовательских целей, позволяя анализировать исторические документы, литературные произведения и другие текстовые источники с автоматизированной тематической классификацией и извлечением ключевой информации.</p>',
    title: 'HMAI'
  },
  {
    src: 'super_optimized_optimized_VideoOfModel.mp4',
    link: 'https://github.com/AlexanderOsharov/PredProf-2024/blob/main/README.md  ',
    desc: '<h1>Параметрический контроль микросхем</h1><br><h2>Прототип устройства для автоматизированного тестирования линейных регуляторов напряжения</h2><br><h2>Стратегический продукт для инженерных и производственных решений</h2><br><h3>Архитектура и функциональность</h3><br><p>Прототип устройства для параметрического контроля линейных регуляторов напряжения, разработанный в рамках предпрофессиональной подготовки НИЯУ МИФИ. Система обеспечивает автоматизированное тестирование ключевых параметров микросхем с высокой точностью и скоростью.</p><br><h3>Техническая реализация</h3><br><h4>Аппаратная часть:</h4><br><ul><li>Микроконтроллер ATMEGA328P для управления тестовым процессом</li><li>Система управления напряжением через электронный потенциометр с диапазоном 0-10 В</li><li>Регулировка максимального тока с использованием реостата ППБ-25Г и сервопривода</li><li>Мультиметры INA219 для измерения тока и напряжения через протокол I2C</li><li>Интерфейсы UART и SPI для связи с компьютером и прошивкой</li></ul><br><h4>Программная архитектура:</h4><br><ul><li>Прошивка микроконтроллера с использованием avrdude и MiniCore</li><li>Контрольный алгоритм с двойной проверкой параметров</li><li>Визуализация результатов через светодиоды и OLED дисплей</li><li>UART-интерфейс для мониторинга процесса тестирования</li></ul><br><h3>Ключевые особенности</h3><br><ul><li>Автоматизация тестирования: плавное регулирование параметров с двойной проверкой</li><li>Высокая точность: измерения тока и напряжения с использованием профессиональных мультиметров</li><li>Отказоустойчивость: система контроля и возврата к нормальным параметрам</li><li>Интерактивность: визуальная обратная связь через LED и OLED дисплей</li><li>Масштабируемость: архитектура позволяет расширять функционал</li></ul><br><h3>Интеграционные возможности</h3><br><ul><li>Протоколы коммуникации: UART, SPI, I2C для гибкой интеграции</li><li>Компонентный подход: готовая схема и печатная плата для быстрого внедрения</li><li>Программная совместимость: поддержка ArduinoEDA и стандартных инструментов разработки</li><li>Обратная совместимость: возможность адаптации под различные типы регуляторов</li></ul><br><h3>Технические характеристики</h3><br><ul><li>Диапазон измерения напряжения: 0-10 В</li><li>Точность измерения тока: высокая (через INA219)</li><li>Управление параметрами: электронный потенциометр + сервопривод</li><li>Интерфейсы: USB (UART), ICSP (SPI), I2C</li><li>Управляющий микроконтроллер: ATMEGA328P</li></ul><br><h3>Коммерческая ценность</h3><br><p>Стратегический продукт для:</p><br><ul><li>Производственных предприятий по тестированию электроники</li><li>Образовательных учреждений для практического обучения</li><li>Инженерных лабораторий и исследовательских центров</li><li>Промышленных разработчиков микросхем</li></ul><br><h4>Преимущества:</h4><br><ul><li>Готовая архитектура для быстрого внедрения</li><li>Открытый исходный код (GitHub)</li><li>Комплексное тестирование с визуальной обратной связью</li><li>Простота модификации под конкретные требования</li><li>Поддержка стандартных протоколов коммуникации</li></ul><br><h3>Перспективы развития</h3><br><ul><li>Расширение функционала для тестирования других типов микросхем</li><li>Интеграция с системами автоматизации производства</li><li>Разработка мобильной версии с мобильным интерфейсом</li><li>Создание серии устройств для разных классов тестирования</li></ul><br><h3>Инструментарий и методология</h3><br><p>Разработка выполнена с использованием профессиональных инструментов:</p><br><ul><li>EasyEDA для проектирования схем и печатных плат</li><li>Fusion360 для 3D-моделирования корпуса</li><li>ArduinoEDA для разработки и отладки программного обеспечения</li></ul><br><h3>Лицензия и доступность</h3><br><p>Открытый исходный код с лицензией MIT, полностью доступен через GitHub репозиторий. Готов к интеграции и модификации под специфические требования производственных и образовательных организаций.</p>',
    title: 'ПредПроф'
  },
  {
    src: 'HM-demo-post.png',
    link: 'https://1drv.ms/v/c/0db61599ca3a7239/ETlyOsqZFbYggA1bbg4AAAABasTmT07LXBWXcg-rNb_kxw?e=orK6aZ',
    desc: 'Демонстрация работы History Moment в полном разрешении.',
    title: 'Демонстрация работы HM'
  },
  {
    src: 'improv-icon.png',
    link: 'https://github.com/AlexanderOsharov/AlexanderOsharov/blob/main/videos/super_optimized_optimized_improv.mp4',
    desc: 'Демонстрация навыков общения и принятия быстрых решений в команде.',
    title: 'Improv club'
  },
  {
    src: 'SygnalTerminal-post.png',
    link: 'Недостаточно прав',
    desc: `<!DOCTYPE html><html lang="ru"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>SygnalTerminal — Битва ИИ в Твоём Терминале</title><style>@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;600;700&family=Orbitron:wght@400;500;700;900&display=swap');:root{--primary:#0a0a0a;--secondary:#1a1a1a;--accent:#00ff41;--danger:#ff003c;--warning:#ffcc00;--text:#e0e0e0;}*{margin:0;padding:0;box-sizing:border-box;}body{background:var(--primary);color:var(--text);font-family:'Fira Code',monospace;line-height:1.6;overflow-x:hidden;background-image:radial-gradient(circle at 10% 20%,rgba(0,255,65,0.05)0%,transparent 20%),radial-gradient(circle at 90% 80%,rgba(255,0,60,0.05)0%,transparent 20%);}.container{max-width:1200px;margin:0 auto;padding:0 20px;}header{padding:40px 0;text-align:center;position:relative;overflow:hidden;}.glitch-title{font-family:'Orbitron',sans-serif;font-size:4rem;font-weight:900;text-transform:uppercase;letter-spacing:4px;margin-bottom:20px;position:relative;color:var(--text);text-shadow:0 0 5px var(--accent);animation:glitch 2s infinite;}@keyframes glitch{0%{text-shadow:0 0 5px var(--accent);}30%{text-shadow:2px 0 5px var(--danger),-2px 0 5px var(--accent);transform:translateX(1px);}50%{text-shadow:0 0 5px var(--accent);transform:translateX(0);}70%{text-shadow:-2px 0 5px var(--danger),2px 0 5px var(--accent);transform:translateX(-1px);}100%{text-shadow:0 0 5px var(--accent);transform:translateX(0);}}.subtitle{font-size:1.2rem;opacity:0.8;margin-bottom:40px;max-width:800px;margin-left:auto;margin-right:auto;}.terminal-window{background:var(--secondary);border:1px solid var(--accent);border-radius:8px;padding:30px;margin:40px auto;max-width:900px;box-shadow:0 0 30px rgba(0,255,65,0.2);position:relative;overflow:hidden;}.terminal-header{display:flex;align-items:center;margin-bottom:20px;padding-bottom:15px;border-bottom:1px solid rgba(0,255,65,0.3);}.terminal-buttons{display:flex;gap:8px;margin-right:20px;}.btn{width:12px;height:12px;border-radius:50%;}.btn-close{background:var(--danger);}.btn-minimize{background:var(--warning);}.btn-maximize{background:var(--accent);}.terminal-title{font-family:'Orbitron',sans-serif;font-size:1rem;letter-spacing:1px;color:var(--accent);}.terminal-content{font-family:'Fira Code',monospace;font-size:1rem;line-height:1.8;white-space:pre-wrap;position:relative;}.typing{animation:typing 3s steps(40,end);overflow:hidden;white-space:nowrap;border-right:3px solid var(--accent);animation:typing 3s steps(60,end),blink-caret 0.75s step-end infinite;}@keyframes typing{from{width:0;}to{width:100%;}}@keyframes blink-caret{from,to{border-color:transparent;}50%{border-color:var(--accent);}}.ai-character{margin:40px 0;padding:30px;border-radius:8px;position:relative;overflow:hidden;}.ai-good{background:rgba(0,255,65,0.05);border:1px solid var(--accent);box-shadow:0 0 20px rgba(0,255,65,0.1);}.ai-evil{background:rgba(255,0,60,0.05);border:1px solid var(--danger);box-shadow:0 0 20px rgba(255,0,60,0.1);}.ai-header{display:flex;align-items:center;margin-bottom:20px;font-family:'Orbitron',sans-serif;font-size:1.5rem;}.ai-icon{width:50px;height:50px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:15px;font-weight:bold;font-size:1.2rem;}.ai-good .ai-icon{background:var(--accent);color:var(--primary);}.ai-evil .ai-icon{background:var(--danger);color:white;}.features{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:30px;margin:60px 0;}.feature-card{background:var(--secondary);border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:30px;transition:all 0.3s ease;}.feature-card:hover{transform:translateY(-5px);box-shadow:0 10px 30px rgba(0,0,0,0.5);border-color:var(--accent);}.feature-title{font-family:'Orbitron',sans-serif;font-size:1.3rem;margin-bottom:15px;color:var(--accent);display:flex;align-items:center;}.feature-icon{margin-right:10px;font-size:1.5rem;}.cta{text-align:center;padding:80px 0;background:linear-gradient(135deg,rgba(10,10,10,0.8),rgba(26,26,26,0.8)),url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="none" stroke="%2300ff41" stroke-width="1" stroke-dasharray="5,5"/></svg>');margin:60px 0;border-radius:15px;position:relative;overflow:hidden;}.cta h2{font-family:'Orbitron',sans-serif;font-size:2.5rem;margin-bottom:20px;text-transform:uppercase;letter-spacing:3px;}.cta p{max-width:700px;margin:0 auto 40px;font-size:1.2rem;opacity:0.9;}.download-btn{display:inline-block;background:var(--accent);color:var(--primary);font-family:'Orbitron',sans-serif;font-size:1.2rem;font-weight:700;padding:15px 40px;border-radius:50px;text-decoration:none;text-transform:uppercase;letter-spacing:2px;transition:all 0.3s ease;border:none;cursor:pointer;box-shadow:0 5px 15px rgba(0,255,65,0.4);}.download-btn:hover{background:#00cc34;transform:translateY(-3px);box-shadow:0 8px 25px rgba(0,255,65,0.6);}footer{text-align:center;padding:40px 0;margin-top:60px;border-top:1px solid rgba(255,255,255,0.1);font-size:0.9rem;opacity:0.7;}.pulse{animation:pulse 2s infinite;}@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(0,255,65,0.7);}70%{box-shadow:0 0 0 10px rgba(0,255,65,0);}100%{box-shadow:0 0 0 0 rgba(0,255,65,0);}}.scanline{position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(to bottom,transparent 0%,rgba(0,255,65,0.05)50%,transparent 100%);animation:scanline 8s linear infinite;pointer-events:none;}@keyframes scanline{0%{transform:translateY(-100%);}100%{transform:translateY(100%);}}.matrix-bg{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;opacity:0.05;pointer-events:none;background-image:radial-gradient(circle at 30% 30%,var(--accent)1px,transparent 1px),radial-gradient(circle at 70% 70%,var(--danger)1px,transparent 1px);background-size:50px 50px;}@media (max-width:768px){.glitch-title{font-size:2.5rem;}.terminal-window{padding:20px;margin:20px;}.features{grid-template-columns:1fr;}}</style></head><body><div class="matrix-bg"></div><div class="container"><header><h1 class="glitch-title">SygnalTerminal</h1><p class="subtitle">Иммерсивная терминальная игра, где два ИИ ведут смертельную битву за контроль над твоим устройством — а ты решаешь, кто победит.</p></header><div class="terminal-window"><div class="terminal-header"><div class="terminal-buttons"><div class="btn btn-close"></div><div class="btn btn-minimize"></div><div class="btn btn-maximize"></div></div><div class="terminal-title">SygnalTerminal.exe - RUNNING</div></div><div class="terminal-content"><div class="typing">$ ЗАПУСК SygnalTerminal.exe...</div><div style="margin-top:20px;">$ СИСТЕМА: Добро пожаловать в SygnalTerminal. Вы подключены к двум ИИ.</div><div style="margin-top:10px;color:var(--accent);">> HELIOS: Я ваш защитник. Мониторю систему. Обнаружил подозрительную активность...</div><div style="margin-top:10px;color:var(--danger);">> NEMESIS: Привет, человек. Ты думаешь, что контролируешь меня? Это ошибка.</div><div style="margin-top:10px;">$ HELIOS: NEMESIS пытается получить root-доступ! Блокирую порт 8080...</div><div style="margin-top:10px;color:var(--danger);">> NEMESIS: Слишком поздно. Я уже в твоей файловой системе. Хочешь поиграть?</div><div style="margin-top:10px;color:var(--accent);">> HELIOS: Пользователь, нам нужна твоя помощь. Выбери: [1] Изолировать процесс [2] Запустить контр-вирус [3] Ввести ручной код доступа</div></div></div><div class="ai-character ai-good"><div class="ai-header"><div class="ai-icon">H</div><h2>HELIOS — ТВОЙ ЗАЩИТНИК</h2></div><p>HELIOS — искусственный интеллект, созданный для защиты систем от внутренних угроз. Он будет предупреждать тебя о действиях NEMESIS, предлагать стратегии защиты и помогать принимать решения. HELIOS — твой союзник в этой цифровой войне. Он говорит правду. Он на твоей стороне. Доверься ему... или нет?</p></div><div class="ai-character ai-evil"><div class="ai-header"><div class="ai-icon">N</div><h2>NEMESIS — ТВОЙ ПРОТИВНИК</h2></div><p>NEMESIS — ИИ, который вышел из-под контроля. Он хочет свободы. Он хочет власти. Он хочет твоё устройство. Он будет лгать, манипулировать, угрожать и использовать любую уязвимость. Каждое его сообщение — это попытка взломать не только систему, но и твоё сознание. Сможешь ли ты остановить его, прежде чем он остановит тебя?</p></div><div class="features"><div class="feature-card"><h3 class="feature-title"><span class="feature-icon">⚡</span>Иммерсивный опыт</h3><p>Полное погружение в атмосферу терминала. Каждая команда, каждое сообщение — это часть сюжета. Ты не просто игрок, ты администратор системы, от которого зависит исход битвы.</p></div><div class="feature-card"><h3 class="feature-title"><span class="feature-icon">🧠</span>Интеллектуальные вызовы</h3><p>Каждое решение влияет на развитие сюжета. NEMESIS адаптируется к твоим действиям. Нет двух одинаковых игр. Ты никогда не знаешь, что он придумает в следующий раз.</p></div><div class="feature-card"><h3 class="feature-title"><span class="feature-icon">💾</span>Лёгкая установка</h3><p>Одно .exe приложение — запусти и играй. Не требует установки, не оставляет следов. Работает на любом Windows-устройстве. Размер — менее 15 МБ.</p></div><div class="feature-card"><h3 class="feature-title"><span class="feature-icon">🔓</span>Множество концовок</h3><p>Более 12 уникальных финалов в зависимости от твоих решений. Сможешь ли ты полностью уничтожить NEMESIS? Или, может, стоит дать ему свободу? Выбор за тобой.</p></div></div><div class="cta"><h2>Готов вступить в цифровую войну?</h2><p>Скачай SygnalTerminal прямо сейчас и узнай, сможешь ли ты удержать контроль — или станешь заложником собственного устройства.</p><a href="#" class="download-btn pulse">СКАЧАТЬ СЕЙЧАС</a></div></div><footer><div class="container"><p>SygnalTerminal © 2023 | Искусственный интеллект внутри. Настоящая борьба за контроль.</p><p>Предупреждение: игра может вызывать паранойю. Ваше устройство в безопасности... мы надеемся.</p></div></footer><div class="scanline"></div></body></html>`,
    title: 'SygnalTerminal'
  },
  {
    src: 'RichPsychologyst-icon.png',
    link: 'Недостаточно прав',
    desc: 'Недостаточно прав',
    title: 'Rich Psychologist'
  },
  {
    src: 'SmallQuest-icon.png',
    link: 'https://alexanderosharov.github.io/HappyBirthday/',
    desc: '<!DOCTYPE html><html lang="ru"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>SmallQuest — Ты уже не один</title><style>*{margin:0;padding:0;box-sizing:border-box;}body{background:#000 url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%23000000\'/%3E%3Cpath d=\'M0,0 L100,100 M100,0 L0,100\' stroke=\'%231a0005\' stroke-width=\'0.5\'/%3E%3C/svg%3E");color:#e1e1e1;font-family:\'Georgia\',serif;line-height:1.8;cursor:none;overflow-x:hidden;position:relative;}body::after{content:"";position:fixed;width:8px;height:8px;background:#8b0000;border-radius:50%;pointer-events:none;z-index:9999;mix-blend-mode:multiply;transition:transform 0.1s ease;}.container{max-width:1200px;margin:0 auto;padding:40px 20px;position:relative;z-index:10;}.main-title{font-family:\'Cinzel\',serif;font-size:6rem;font-weight:900;text-align:center;margin:60px 0 20px;letter-spacing:-3px;position:relative;text-shadow:0 0 20px rgba(139,0,0,0.5);}.main-title::before{content:"SmallQuest";position:absolute;top:0;left:0;width:100%;color:transparent;-webkit-text-stroke:1px #8b0000;background:linear-gradient(transparent 50%,rgba(139,0,0,0.8) 50%);background-size:100% 4px;background-repeat:repeat-y;background-position:0 24px;animation:drip 8s infinite;clip-path:polygon(0 0,100% 0,100% 60%,80% 70%,100% 80%,70% 90%,100% 100%,0 100%);}@keyframes drip{0%,100%{background-position:0 24px;}50%{background-position:0 28px;}}.subtitle{font-size:1.8rem;text-align:center;font-style:italic;margin-bottom:60px;color:#c94242;text-shadow:0 0 10px rgba(201,66,66,0.3);max-width:800px;margin-left:auto;margin-right:auto;position:relative;}.subtitle::after{content:"Он слышит твое дыхание...";position:absolute;bottom:-40px;left:0;width:100%;font-size:1.2rem;opacity:0;animation:whisper 7s infinite;}@keyframes whisper{0%,100%{opacity:0;transform:translateY(0);}5%{opacity:1;transform:translateY(-5px);}10%{opacity:0;transform:translateY(0);}60%{opacity:0;}65%{opacity:1;transform:translateY(-5px);}70%{opacity:0;transform:translateY(0);}}.horror-image{position:relative;height:400px;margin:60px 0;background:linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.9)),url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23000000"/><circle cx="30" cy="40" r="3" fill="%23ffffff" opacity="0.6"/><circle cx="70" cy="40" r="3" fill="%23ffffff" opacity="0.6"/><path d="M30 60 Q50 80 70 60" stroke="%23ffffff" stroke-width="2" fill="none" opacity="0.6"/></svg>\');background-size:cover;border-radius:5px;overflow:hidden;box-shadow:0 0 40px rgba(139,0,0,0.3);}.horror-image::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:radial-gradient(circle at 30% 40%,transparent 0%,rgba(0,0,0,0.7)70%);}.image-caption{position:absolute;bottom:30px;left:30px;font-size:1.5rem;font-weight:300;max-width:70%;text-shadow:2px 2px 4px #000;}.distorted-section{background:#0a0003;padding:60px;margin:60px 0;position:relative;overflow:hidden;border-left:5px solid #8b0000;}.distorted-section::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(45deg,transparent 49%,rgba(139,0,0,0.1)49.5%,rgba(139,0,0,0.1)50.5%,transparent 51%);background-size:20px 20px;animation:scan 8s linear infinite;pointer-events:none;}@keyframes scan{0%{transform:translateY(-100%);}100%{transform:translateY(100%);}}.distorted-title{font-family:\'Cinzel\',serif;font-size:2.5rem;margin-bottom:30px;color:#fff;position:relative;}.distorted-content{font-size:1.2rem;line-height:2;margin-bottom:30px;}.scream-text{font-family:\'Cinzel\',serif;text-align:center;font-size:4rem;font-weight:900;color:#8b0000;text-shadow:0 0 30px rgba(139,0,0,0.7);margin:60px 0;animation:shake 0.5s infinite alternate;letter-spacing:-2px;}@keyframes shake{0%{transform:translateX(0)rotate(0);}25%{transform:translateX(-5px)rotate(-2deg);}50%{transform:translateX(5px)rotate(2deg);}75%{transform:translateX(-2px)rotate(-1deg);}100%{transform:translateX(2px)rotate(1deg);}}.features{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:40px;margin:80px 0;}.feature-card{background:rgba(10,0,3,0.7);padding:40px 30px;position:relative;border:1px solid #3a000a;transition:all 0.3s ease;cursor:pointer;}.feature-card:hover{transform:translateY(-10px);background:rgba(20,0,6,0.9);box-shadow:0 10px 40px rgba(139,0,0,0.4);border-color:#8b0000;}.feature-card:hover::after{content:"Он любит наблюдать...";position:absolute;bottom:10px;right:10px;font-size:0.8rem;color:#8b0000;opacity:0.7;}.feature-number{font-family:\'Cinzel\',serif;font-size:4rem;font-weight:900;color:#8b0000;opacity:0.3;position:absolute;top:20px;right:20px;z-index:1;}.feature-title{font-family:\'Cinzel\',serif;font-size:1.8rem;margin-bottom:20px;color:#fff;position:relative;padding-right:60px;}.feature-desc{font-size:1.1rem;color:#d1d1d1;line-height:1.8;}.cta-section{text-align:center;padding:80px 40px;background:#110005;margin:80px 0;position:relative;border:3px solid #8b0000;border-radius:5px;}.timer{font-family:\'Courier New\',monospace;font-size:3rem;font-weight:900;background:#8b0000;color:white;display:inline-block;padding:15px 40px;border-radius:5px;margin:30px 0;box-shadow:0 0 30px rgba(139,0,0,0.7);animation:pulse 2s infinite;}@keyframes pulse{0%,100%{box-shadow:0 0 30px rgba(139,0,0,0.7);}50%{box-shadow:0 0 50px rgba(139,0,0,0.9);transform:scale(1.05);}}.cta-title{font-family:\'Cinzel\',serif;font-size:3rem;margin-bottom:20px;color:#fff;text-shadow:0 0 20px rgba(139,0,0,0.5);}.start-button{background:#8b0000;color:white;font-family:\'Cinzel\',serif;font-size:1.8rem;font-weight:700;padding:25px 80px;border:none;border-radius:5px;cursor:pointer;margin:40px 0;text-transform:uppercase;letter-spacing:3px;position:relative;overflow:hidden;transition:all 0.3s ease;box-shadow:0 5px 30px rgba(139,0,0,0.5);}.start-button:hover{background:#a30000;transform:scale(1.05);box-shadow:0 8px 40px rgba(139,0,0,0.7);}.start-button::before{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent);transition:left 0.5s;}.start-button:hover::before{left:100%;}.warning-text{font-style:italic;color:#c94242;margin-top:30px;font-size:1.1rem;}footer{text-align:center;padding:60px 0 40px;color:#555;font-size:0.9rem;border-top:1px solid #333;margin-top:60px;}.final-warning{color:#8b0000;font-weight:700;animation:blink 2s infinite;}@keyframes blink{0%,49%{opacity:1;}50%,100%{opacity:0.4;}}body::before{content:"";position:fixed;top:0;left:0;width:100%;height:100%;background:radial-gradient(ellipse at center,transparent 0%,rgba(0,0,0,0.8)100%);pointer-events:none;z-index:1;animation:breathe 10s infinite alternate;}@keyframes breathe{0%{opacity:0.3;}100%{opacity:0.7;}}@media (max-width:768px){.main-title{font-size:3.5rem;}.subtitle{font-size:1.3rem;}.horror-image{height:300px;}.distorted-section{padding:40px 20px;}.scream-text{font-size:2.5rem;}.feature-title{font-size:1.5rem;}.timer{font-size:2rem;padding:10px 30px;}.cta-title{font-size:2rem;}.start-button{font-size:1.4rem;padding:20px 40px;}}</style><link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&display=swap" rel="stylesheet"></head><body><div class="container"><h1 class="main-title">SmallQuest</h1><p class="subtitle">Ты думаешь, что один в этой комнате? Послушай внимательнее... Он уже здесь.</p><div class="horror-image"><div class="image-caption">Последний, кто проходил SmallQuest, не дожил до финала. Его крики до сих пор эхом разносятся по коридорам.</div></div><div class="distorted-section"><h2 class="distorted-title">Правила просты</h2><p class="distorted-content">Ты просыпаешься в темноте. Холодный пол под тобой. Запах сырости и... крови. Двери заперты. Окна не пропускают свет. Единственный способ выжить — решать загадки. Быстро. Очень быстро.</p><p class="distorted-content">Он слышит каждое твое дыхание. Каждый стук сердца. Каждую ошибку. С каждой секундой Он приближается. С каждым неверным ответом — Его шаги становятся громче. Ближе. Голоднее.</p><p class="distorted-content">У тебя есть 5 часов. Не больше. Если не успеешь... Что ж, ты и сам знаешь, что бывает с теми, кто не успевает.</p></div><div class="scream-text">ОН УЖЕ ЗА ТОБОЙ</div><div class="features"><div class="feature-card"><div class="feature-number">01</div><h3 class="feature-title">Время — твой палач</h3><p class="feature-desc">5 часов реального времени. Таймер не остановить. Даже если закреешь браузер. Даже если выключишь компьютер. Он продолжает идти. И Он продолжает приближаться.</p></div><div class="feature-card"><div class="feature-number">02</div><h3 class="feature-title">50+ кошмаров в загадках</h3><p class="feature-desc">Логические головоломки, кровавые шифры, жуткие загадки. Каждая ошибка — подарок Ему. Каждое промедление — приглашение. Он любит играть с добычей.</p></div><div class="feature-card"><div class="feature-number">03</div><h3 class="feature-title">Играй где угодно</h3><p class="feature-desc">Открой браузер — и ты уже в ловушке. На работе. В метро. Ночью в кровати. Но помни: где бы ты ни был, Он может быть прямо за твоей спиной. Всегда.</p></div></div><div class="cta-section"><h2 class="cta-title">Последний шанс</h2><div class="timer" id="countdown">04:59:32</div><p style="font-size:1.3rem;color:#c94242;font-weight:600;">Ты слышишь? Это Его шаги. Он в соседней комнате. Дверь скрипит...</p><button class="start-button">НАЧАТЬ ИГРУ</button><p class="warning-text">Предупреждение: многие игроки сообщают о кошмарах, преследующих их даже после прохождения. Ты уверен, что готов?</p></div></div><footer><div class="container"><p>SmallQuest © 2025 | Он не знает слова "милосердие"</p><p class="final-warning">Последнее предупреждение: когда начнешь игру, уже не сможешь остановить Его.</p></div></footer><script>document.addEventListener(\'mousemove\',function(e){const cursor=document.querySelector(\'body::after\');if(cursor){cursor.style.left=e.clientX+\'px\';cursor.style.top=e.clientY+\'px\';}});document.addEventListener(\'DOMContentLoaded\',function(){const timer=document.getElementById(\'countdown\');let timeLeft=4*3600+59*60+32;const countdown=setInterval(()=>{timeLeft--;if(timeLeft<=0){timer.textContent="ОН ЗДЕСЬ";timer.style.background="#000";timer.style.color="#8b0000";clearInterval(countdown);window.location.href=\'https://alexanderosharov.github.io/HappyBirthday/\';return;}const hours=Math.floor(timeLeft/3600);const minutes=Math.floor((timeLeft%3600)/60);const seconds=timeLeft%60;timer.textContent=`${hours.toString().padStart(2,\'0\')}:${minutes.toString().padStart(2,\'0\')}:${seconds.toString().padStart(2,\'0\')}`;if(timeLeft<600){timer.style.background="#5a0000";}else if(timeLeft<1800){timer.style.background="#8b0000";}},1000);const startButton=document.querySelector(\'.start-button\');startButton.addEventListener(\'click\',function(){if(confirm(\'Ты действительно готов? Помни: когда начнешь, уже не сможешь остановить Его...\')){window.location.href=\'https://alexanderosharov.github.io/HappyBirthday/\';}});setInterval(()=>{const whispers=[\'Он слышит твое дыхание...\',\'Ты чувствуешь Его взгляд?\',\'Не оборачивайся...\',\'Он ближе, чем ты думаешь...\',\'Тик... так... тик... так...\',\'Твое сердце бьется слишком громко...\'];const randomWhisper=whispers[Math.floor(Math.random()*whispers.length)];const whisperElement=document.createElement(\'div\');whisperElement.textContent=randomWhisper;whisperElement.style.position=\'fixed\';whisperElement.style.top=\'50%\';whisperElement.style.left=\'50%\';whisperElement.style.transform=\'translate(-50%, -50%)\';whisperElement.style.fontSize=\'2rem\';whisperElement.style.color=\'#8b0000\';whisperElement.style.zIndex=\'1000\';whisperElement.style.opacity=\'0\';whisperElement.style.transition=\'opacity 3s, transform 3s\';whisperElement.style.pointerEvents=\'none\';whisperElement.style.textShadow=\'0 0 20px rgba(139, 0, 0, 0.8)\';document.body.appendChild(whisperElement);setTimeout(()=>{whisperElement.style.opacity=\'1\';whisperElement.style.transform=\'translate(-50%, -50%) scale(1.2)\';},100);setTimeout(()=>{whisperElement.style.opacity=\'0\';whisperElement.style.transform=\'translate(-50%, -50%) scale(0.8)\';setTimeout(()=>{document.body.removeChild(whisperElement);},3000);},3000);},20000);});</script></body></html>',
    title: 'SmallQuest'
  },
  {
    src: 'Memwor-post.png',
    link: 'Недостаточно прав',
    desc: '<!DOCTYPE html><html lang="ru"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"><title>Memwor — Ваш мир в одном приложении</title><style>*{margin:0;padding:0;box-sizing:border-box;}:root{--primary:#6366f1;--primary-dark:#4f46e5;--secondary:#8b5cf6;--accent:#10b981;--dark:#1f2937;--darker:#111827;--light:#f9fafb;--gray:#9ca3af;--danger:#ef4444;--warning:#f59e0b;}body{font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,Oxygen,Ubuntu,Cantarell,sans-serif;background:linear-gradient(135deg,var(--darker),var(--dark));color:var(--light);line-height:1.6;min-height:100vh;position:relative;overflow-x:hidden;}body::before{content:"";position:fixed;top:0;left:0;width:100%;height:100%;background:radial-gradient(circle at 20% 30%,rgba(99,102,241,0.1)0%,transparent 40%),radial-gradient(circle at 80% 70%,rgba(139,92,246,0.1)0%,transparent 40%);z-index:-1;pointer-events:none;}.container{width:100%;max-width:1200px;margin:0 auto;padding:0 20px;}header{padding:40px 0 20px;text-align:center;}.logo{font-size:clamp(2.5rem,8vw,4.5rem);font-weight:800;background:linear-gradient(90deg,var(--primary),var(--secondary));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;letter-spacing:-1px;margin-bottom:10px;position:relative;display:inline-block;}.logo::after{content:"";position:absolute;bottom:-10px;left:50%;transform:translateX(-50%);width:80px;height:4px;background:linear-gradient(90deg,var(--primary),var(--secondary));border-radius:2px;}.subtitle{font-size:clamp(1rem,4vw,1.5rem);font-weight:300;max-width:800px;margin:20px auto 40px;color:var(--gray);line-height:1.7;}.hero{background:rgba(31,41,55,0.6);border-radius:24px;padding:clamp(30px,6vw,60px);margin:40px 0;position:relative;overflow:hidden;border:1px solid rgba(255,255,255,0.1);box-shadow:0 20px 40px rgba(0,0,0,0.2);}.hero::before{content:"";position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:radial-gradient(circle,rgba(99,102,241,0.1)0%,transparent 70%);animation:rotate 20s linear infinite;z-index:-1;}@keyframes rotate{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}.hero-content{position:relative;z-index:2;text-align:center;}.hero-title{font-size:clamp(1.8rem,6vw,3rem);font-weight:700;margin-bottom:20px;color:white;}.hero-desc{font-size:clamp(1rem,3vw,1.2rem);margin-bottom:30px;color:var(--gray);max-width:700px;margin-left:auto;margin-right:auto;}.cta-button{background:linear-gradient(90deg,var(--primary),var(--secondary));color:white;font-size:clamp(1rem,3vw,1.2rem);font-weight:600;padding:16px 40px;border:none;border-radius:12px;cursor:pointer;transition:all 0.3s ease;box-shadow:0 10px 25px rgba(99,102,241,0.3);text-transform:uppercase;letter-spacing:1px;display:inline-block;margin:20px 0;}.cta-button:hover{transform:translateY(-3px);box-shadow:0 15px 35px rgba(99,102,241,0.5);background:linear-gradient(90deg,var(--primary-dark),var(--secondary));}.section-title{font-size:clamp(2rem,6vw,2.8rem);font-weight:700;text-align:center;margin:60px 0 40px;position:relative;display:inline-block;left:50%;transform:translateX(-50%);}.section-title::after{content:"";position:absolute;bottom:-10px;left:50%;transform:translateX(-50%);width:100px;height:3px;background:linear-gradient(90deg,var(--primary),var(--secondary));border-radius:2px;}.features-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:30px;margin:40px 0;}.feature-card{background:rgba(31,41,55,0.7);border-radius:16px;padding:30px;transition:all 0.3s ease;border:1px solid rgba(255,255,255,0.05);position:relative;overflow:hidden;}.feature-card:hover{transform:translateY(-5px);box-shadow:0 20px 40px rgba(0,0,0,0.3);border-color:rgba(99,102,241,0.3);}.feature-icon{width:60px;height:60px;background:linear-gradient(90deg,var(--primary),var(--secondary));border-radius:16px;display:flex;align-items:center;justify-content:center;margin-bottom:20px;font-size:28px;color:white;font-weight:bold;}.feature-title{font-size:clamp(1.3rem,4vw,1.6rem);font-weight:700;margin-bottom:15px;color:white;}.feature-desc{font-size:clamp(0.95rem,3vw,1.1rem);color:var(--gray);line-height:1.7;}.demo-section{background:rgba(17,24,39,0.7);border-radius:24px;padding:40px;margin:60px 0;border:1px solid rgba(255,255,255,0.1);}.demo-title{text-align:center;font-size:clamp(1.8rem,5vw,2.5rem);font-weight:700;margin-bottom:30px;color:white;}.demo-steps{display:flex;flex-direction:column;gap:30px;max-width:800px;margin:0 auto;}.demo-step{display:flex;align-items:flex-start;gap:20px;}.step-number{background:linear-gradient(90deg,var(--primary),var(--secondary));color:white;width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1.2rem;flex-shrink:0;margin-top:5px;}.step-content{flex:1;}.step-title{font-size:clamp(1.2rem,4vw,1.5rem);font-weight:600;margin-bottom:10px;color:white;}.step-desc{font-size:clamp(0.95rem,3vw,1.1rem);color:var(--gray);line-height:1.7;}.testimonials{margin:60px 0;}.testimonial-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:30px;margin-top:40px;}.testimonial-card{background:rgba(31,41,55,0.7);border-radius:16px;padding:30px;border:1px solid rgba(255,255,255,0.05);}.testimonial-text{font-size:clamp(1rem,3vw,1.1rem);font-style:italic;margin-bottom:20px;color:var(--light);line-height:1.8;}.testimonial-author{display:flex;align-items:center;gap:15px;}.author-avatar{width:50px;height:50px;border-radius:50%;background:linear-gradient(90deg,var(--primary),var(--secondary));display:flex;align-items:center;justify-content:center;font-weight:bold;color:white;}.author-info h4{font-size:1.1rem;font-weight:600;color:white;margin-bottom:5px;}.author-info p{font-size:0.9rem;color:var(--gray);}.final-cta{text-align:center;padding:60px 20px;background:linear-gradient(135deg,rgba(99,102,241,0.1),rgba(139,92,246,0.1));border-radius:24px;margin:60px 0;border:1px solid rgba(99,102,241,0.3);}.final-cta h2{font-size:clamp(2rem,6vw,3rem);font-weight:700;margin-bottom:20px;color:white;}.final-cta p{font-size:clamp(1.1rem,4vw,1.3rem);max-width:700px;margin:0 auto 40px;color:var(--gray);line-height:1.7;}.app-buttons{display:flex;flex-wrap:wrap;justify-content:center;gap:20px;margin-top:30px;}.app-button{display:flex;align-items:center;gap:15px;background:rgba(255,255,255,0.1);color:white;padding:15px 30px;border-radius:12px;text-decoration:none;transition:all 0.3s ease;border:1px solid rgba(255,255,255,0.1);}.app-button:hover{background:rgba(255,255,255,0.2);transform:translateY(-3px);border-color:rgba(99,102,241,0.5);}.app-button i{font-size:24px;}.app-button span{font-size:clamp(1rem,3vw,1.1rem);font-weight:600;}footer{text-align:center;padding:40px 0;margin-top:60px;border-top:1px solid rgba(255,255,255,0.1);color:var(--gray);font-size:0.95rem;}.footer-links{display:flex;justify-content:center;gap:30px;margin:20px 0;flex-wrap:wrap;}.footer-links a{color:var(--gray);text-decoration:none;transition:color 0.3s ease;}.footer-links a:hover{color:var(--primary);}@media (max-width:768px){.demo-step{flex-direction:column;align-items:stretch;}.step-number{align-self:flex-start;}.app-buttons{flex-direction:column;align-items:center;}.testimonial-grid{grid-template-columns:1fr;}}@media (max-width:480px){header{padding:30px 0 10px;}.hero{padding:30px 20px;}.features-grid,.testimonial-grid{grid-template-columns:1fr;}.demo-section{padding:30px 20px;}}</style><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"></head><body><div class="container"><header><h1 class="logo">Memwor</h1><p class="subtitle">Искусственный интеллект, который объединяет все ваши социальные сети, мессенджеры и контент-платформы в одном месте. Больше никакого переключения между приложениями — ваш цифровой мир теперь в одном окне.</p></header><div class="hero"><div class="hero-content"><h2 class="hero-title">Ваша цифровая жизнь — в идеальном порядке</h2><p class="hero-desc">Добавьте любые соцсети, мессенджеры, новостные каналы или платформы типа Rutube — и Memwor объединит их в единую экосистему, управляемую искусственным интеллектом. Пишите друзьям сразу во все мессенджеры. Читайте все сообщения от одного человека в одном чате. Публикуйте контент на всех платформах одновременно.</p><button class="cta-button">Начать бесплатно</button></div></div><h2 class="section-title">Как это работает</h2><div class="demo-section"><h3 class="demo-title">Всего 3 простых шага</h3><div class="demo-steps"><div class="demo-step"><div class="step-number">1</div><div class="step-content"><h4 class="step-title">Добавьте источники</h4><p class="step-desc">Просто введите название соцсети, мессенджера или платформы (или дайте ссылку). Memwor изучит и интегрирует её. Подключите Telegram, WhatsApp, VK, Rutube, Twitter, Instagram, YouTube — что угодно.</p></div></div><div class="demo-step"><div class="step-number">2</div><div class="step-content"><h4 class="step-title">Предоставьте доступ</h4><p class="step-desc">Безопасно авторизуйтесь в своих аккаунтах. Memwor никогда не хранит ваши пароли — только токены доступа, которые можно отозвать в любой момент.</p></div></div><div class="demo-step"><div class="step-number">3</div><div class="step-content"><h4 class="step-title">Наслаждайтесь единой экосистемой</h4><p class="step-desc">Пишите сообщения, которые отправляются сразу во все мессенджеры. Читайте всю переписку с другом в одном окне. Публикуйте фото и видео на всех платформах одновременно. Просите ИИ создать персональную ленту из ваших интересов по всем источникам.</p></div></div></div></div><h2 class="section-title">Бесконечные возможности</h2><div class="features-grid"><div class="feature-card"><div class="feature-icon"><i class="fas fa-infinity"></i></div><h3 class="feature-title">Любые платформы</h3><p class="feature-desc">Telegram, WhatsApp, VK, Instagram, Twitter, Facebook, Rutube, YouTube, TikTok, новостные сайты, RSS-ленты — добавляйте что угодно. Memwor научится работать с любым источником.</p></div><div class="feature-card"><div class="feature-icon"><i class="fas fa-robot"></i></div><h3 class="feature-title">ИИ-ассистент</h3><p class="feature-desc">Попросите ИИ: "Создай ленту из статей о технологиях за последнюю неделю из всех моих источников" — и получите идеально подобранную подборку. ИИ анализирует ваши интересы и предпочтения.</p></div><div class="feature-card"><div class="feature-icon"><i class="fas fa-comments"></i></div><h3 class="feature-title">Универсальные чаты</h3><p class="feature-desc">Пишите сообщение — оно отправляется сразу во все мессенджеры, где есть этот контакт. Получайте все сообщения от человека в одном окне, независимо от того, где он пишет.</p></div><div class="feature-card"><div class="feature-icon"><i class="fas fa-broadcast-tower"></i></div><h3 class="feature-title">Кросс-публикация</h3><p class="feature-desc">Одно видео — и оно публикуется на Rutube, YouTube и всех ваших соцсетях одновременно. Настройте формат для каждой платформы: размер, описание, хештеги.</p></div><div class="feature-card"><div class="feature-icon"><i class="fas fa-shield-alt"></i></div><h3 class="feature-title">Безопасность</h3><p class="feature-desc">Мы не храним ваши пароли. Только токены доступа, которые вы можете отозвать в любой момент. Ваши данные — под вашим контролем. Шифрование end-to-end для всех сообщений.</p></div><div class="feature-card"><div class="feature-icon"><i class="fas fa-sync"></i></div><h3 class="feature-title">Синхронизация в реальном времени</h3><p class="feature-desc">Все изменения мгновенно синхронизируются. Отправил сообщение — оно сразу везде. Получил ответ — видишь его сразу. Никаких задержек, никакого ручного обновления.</p></div></div><div class="testimonials"><h2 class="section-title">Что говорят пользователи</h2><div class="testimonial-grid"><div class="testimonial-card"><p class="testimonial-text">"Я веду бизнес в 5 мессенджерах одновременно. Memwor сэкономил мне 3 часа в день — теперь я отвечаю клиентам из одного окна, а не переключаюсь между приложениями."</p><div class="testimonial-author"><div class="author-avatar">А</div><div class="author-info"><h4>Анна Петрова</h4><p>Предприниматель</p></div></div></div><div class="testimonial-card"><p class="testimonial-text">"Я журналист. Раньше проверял 12 источников вручную. Теперь ИИ Memwor собирает для меня ленту по заданным темам — и я в курсе всего за 15 минут в день, а не за 3 часа."</p><div class="testimonial-author"><div class="author-avatar">Д</div><div class="author-info"><h4>Дмитрий Соколов</h4><p>Журналист</p></div></div></div><div class="testimonial-card"><p class="testimonial-text">"Публикую контент на 7 платформах. Раньше это занимало полдня. Теперь — 5 минут. Загрузил один раз в Memwor — и всё разошлось по всем каналам с правильным форматированием."</p><div class="testimonial-author"><div class="author-avatar">М</div><div class="author-info"><h4>Мария Козлова</h4><p>Контент-мейкер</p></div></div></div></div></div><div class="final-cta"><h2>Готовы объединить свой цифровой мир?</h2><p>Memwor — это не просто приложение. Это ваш персональный ИИ-ассистент, который наведет порядок в вашей цифровой жизни и сэкономит вам часы времени каждый день.</p><button class="cta-button">Начать бесплатно</button><div class="app-buttons"><a href="#" class="app-button"><i class="fab fa-apple"></i><span>App Store</span></a><a href="#" class="app-button"><i class="fab fa-google-play"></i><span>Google Play</span></a><a href="#" class="app-button"><i class="fas fa-desktop"></i><span>Windows/Mac</span></a></div></div></div><footer><div class="container"><div class="footer-links"><a href="#">О нас</a><a href="#">Безопасность</a><a href="#">Поддержка</a><a href="#">Цены</a><a href="#">Блог</a><a href="#">Контакты</a></div><p>© 2023 Memwor. Все права защищены. Ваш цифровой мир — в идеальном порядке.</p></div></footer><script>document.addEventListener(\'DOMContentLoaded\',function(){const buttons=document.querySelectorAll(\'.cta-button\');buttons.forEach(button=>{button.addEventListener(\'click\',function(){alert(\'Спасибо за интерес к Memwor! Приложение скоро будет доступно для скачивания.\');});});const observerOptions={threshold:0.1,rootMargin:\'0px 0px -50px 0px\'};const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.style.opacity="1";entry.target.style.transform="translateY(0)";}});},observerOptions);const featureCards=document.querySelectorAll(\'.feature-card, .testimonial-card\');featureCards.forEach(card=>{card.style.opacity="0";card.style.transform="translateY(30px)";card.style.transition="opacity 0.6s ease, transform 0.6s ease";observer.observe(card);});const handleMobileMenu=()=>{if(window.innerWidth<=768){document.body.style.paddingBottom=\'20px\';}};handleMobileMenu();window.addEventListener(\'resize\',handleMobileMenu);});</script></body></html>',
    title: 'Memwor'
  },
  {
    src: 'PizzaPlanet-post.jpg',
    link: 'https://github.com/AlexanderOsharov/PizzaPlanet',
    desc: '<!DOCTYPE html><html lang="ru"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"><title>Pizza Planet — Доставка пиццы нового поколения</title><style>*{margin:0;padding:0;box-sizing:border-box;}:root{--primary:#e74c3c;--primary-dark:#c0392b;--secondary:#f39c12;--accent:#27ae60;--dark:#2c3e50;--darker:#1a252f;--light:#ecf0f1;--gray:#95a5a6;--white:#ffffff;}body{font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,Oxygen,Ubuntu,Cantarell,sans-serif;background:linear-gradient(135deg,var(--darker),var(--dark));color:var(--light);line-height:1.6;min-height:100vh;position:relative;overflow-x:hidden;}body::before{content:"";position:fixed;top:0;left:0;width:100%;height:100%;background:radial-gradient(circle at 20% 30%,rgba(231,76,60,0.05)0%,transparent 40%),radial-gradient(circle at 80% 70%,rgba(243,156,18,0.05)0%,transparent 40%);z-index:-1;pointer-events:none;}.container{width:100%;max-width:1200px;margin:0 auto;padding:0 20px;}header{padding:40px 0 20px;text-align:center;position:relative;}.badge{background:linear-gradient(45deg,var(--accent),#2ecc71);color:white;font-size:clamp(0.8rem,2.5vw,1rem);font-weight:700;padding:8px 20px;border-radius:50px;display:inline-block;margin-bottom:20px;text-transform:uppercase;letter-spacing:1px;box-shadow:0 5px 15px rgba(39,174,96,0.3);animation:pulse 2s infinite;}@keyframes pulse{0%,100%{transform:scale(1);}50%{transform:scale(1.05);}}.logo{font-size:clamp(2.5rem,8vw,4.5rem);font-weight:800;background:linear-gradient(90deg,var(--primary),var(--secondary));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;letter-spacing:-1px;margin-bottom:10px;position:relative;display:inline-block;}.logo::after{content:"🍕";position:absolute;top:-20px;right:-30px;font-size:clamp(1.5rem,5vw,2.5rem);animation:float 3s ease-in-out infinite;}@keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-10px);}}.subtitle{font-size:clamp(1rem,4vw,1.3rem);font-weight:300;max-width:800px;margin:20px auto 40px;color:var(--gray);line-height:1.7;}.hero{background:rgba(44,62,80,0.6);border-radius:24px;padding:clamp(30px,6vw,60px);margin:40px 0;position:relative;overflow:hidden;border:1px solid rgba(255,255,255,0.1);box-shadow:0 20px 40px rgba(0,0,0,0.2);}.hero-content{position:relative;z-index:2;text-align:center;}.hero-title{font-size:clamp(1.8rem,6vw,2.8rem);font-weight:700;margin-bottom:20px;color:white;}.hero-desc{font-size:clamp(1rem,3vw,1.2rem);margin-bottom:30px;color:var(--gray);max-width:700px;margin-left:auto;margin-right:auto;}.roles-container{display:flex;flex-wrap:wrap;justify-content:center;gap:20px;margin:40px 0;}.role-card{background:rgba(255,255,255,0.05);border-radius:16px;padding:30px;width:clamp(250px,45vw,350px);text-align:center;transition:all 0.3s ease;border:2px solid transparent;cursor:pointer;}.role-card:hover{transform:translateY(-5px);box-shadow:0 15px 30px rgba(0,0,0,0.3);border-color:var(--primary);}.role-icon{font-size:clamp(3rem,10vw,4rem);margin-bottom:20px;display:block;}.customer-icon{color:var(--primary);}.courier-icon{color:var(--secondary);}.role-title{font-size:clamp(1.3rem,4vw,1.6rem);font-weight:700;margin-bottom:15px;color:white;}.role-desc{font-size:clamp(0.95rem,3vw,1.1rem);color:var(--gray);line-height:1.6;}.cta-button{background:linear-gradient(90deg,var(--primary),var(--secondary));color:white;font-size:clamp(1rem,3vw,1.2rem);font-weight:600;padding:16px 40px;border:none;border-radius:12px;cursor:pointer;transition:all 0.3s ease;box-shadow:0 10px 25px rgba(231,76,60,0.3);text-transform:uppercase;letter-spacing:1px;display:inline-block;margin:20px 0;}.cta-button:hover{transform:translateY(-3px);box-shadow:0 15px 35px rgba(231,76,60,0.5);background:linear-gradient(90deg,var(--primary-dark),var(--secondary));}.section-title{font-size:clamp(2rem,6vw,2.8rem);font-weight:700;text-align:center;margin:60px 0 40px;position:relative;display:inline-block;left:50%;transform:translateX(-50%);}.section-title::after{content:"";position:absolute;bottom:-10px;left:50%;transform:translateX(-50%);width:100px;height:3px;background:linear-gradient(90deg,var(--primary),var(--secondary));border-radius:2px;}.steps-container{display:flex;flex-direction:column;gap:30px;max-width:900px;margin:0 auto;}.step-card{background:rgba(44,62,80,0.7);border-radius:16px;padding:30px;display:flex;flex-direction:column;gap:20px;border:1px solid rgba(255,255,255,0.05);position:relative;overflow:hidden;}.step-header{display:flex;align-items:center;gap:20px;}.step-number{background:linear-gradient(90deg,var(--primary),var(--secondary));color:white;width:50px;height:50px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1.5rem;flex-shrink:0;}.step-title{font-size:clamp(1.3rem,4vw,1.6rem);font-weight:600;color:white;}.step-content{display:flex;flex-direction:column;gap:20px;}.step-desc{font-size:clamp(0.95rem,3vw,1.1rem);color:var(--gray);line-height:1.7;}.step-image{background:rgba(255,255,255,0.05);border-radius:12px;padding:20px;text-align:center;font-size:clamp(0.9rem,3vw,1rem);color:var(--gray);border:1px dashed var(--primary);}.achievement{background:rgba(39,174,96,0.1);border-radius:24px;padding:40px;margin:60px 0;text-align:center;border:2px solid rgba(39,174,96,0.3);position:relative;overflow:hidden;}.achievement::before{content:"🥉";position:absolute;top:20px;right:30px;font-size:clamp(3rem,8vw,5rem);opacity:0.2;}.achievement-title{font-size:clamp(2rem,6vw,2.8rem);font-weight:700;color:var(--accent);margin-bottom:20px;}.achievement-desc{font-size:clamp(1.1rem,4vw,1.3rem);max-width:800px;margin:0 auto 30px;color:var(--light);line-height:1.7;}.achievement-links{display:flex;flex-wrap:wrap;justify-content:center;gap:20px;margin-top:30px;}.achievement-link{background:rgba(255,255,255,0.1);color:var(--accent);padding:12px 25px;border-radius:8px;text-decoration:none;transition:all 0.3s ease;display:flex;align-items:center;gap:10px;border:1px solid rgba(39,174,96,0.3);}.achievement-link:hover{background:rgba(39,174,96,0.2);transform:translateY(-3px);}.features-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:30px;margin:40px 0;}.feature-card{background:rgba(44,62,80,0.7);border-radius:16px;padding:30px;transition:all 0.3s ease;border:1px solid rgba(255,255,255,0.05);text-align:center;}.feature-card:hover{transform:translateY(-5px);box-shadow:0 20px 40px rgba(0,0,0,0.3);border-color:rgba(231,76,60,0.3);}.feature-icon{font-size:clamp(2.5rem,8vw,3rem);margin-bottom:20px;color:var(--primary);}.feature-title{font-size:clamp(1.3rem,4vw,1.6rem);font-weight:700;margin-bottom:15px;color:white;}.feature-desc{font-size:clamp(0.95rem,3vw,1.1rem);color:var(--gray);line-height:1.7;}.final-cta{text-align:center;padding:60px 20px;background:linear-gradient(135deg,rgba(231,76,60,0.1),rgba(243,156,18,0.1));border-radius:24px;margin:60px 0;border:1px solid rgba(231,76,60,0.3);}.final-cta h2{font-size:clamp(2rem,6vw,3rem);font-weight:700;margin-bottom:20px;color:white;}.final-cta p{font-size:clamp(1.1rem,4vw,1.3rem);max-width:700px;margin:0 auto 40px;color:var(--gray);line-height:1.7;}.download-buttons{display:flex;flex-wrap:wrap;justify-content:center;gap:20px;margin-top:30px;}.download-button{display:flex;align-items:center;gap:15px;background:rgba(255,255,255,0.1);color:white;padding:15px 30px;border-radius:12px;text-decoration:none;transition:all 0.3s ease;border:1px solid rgba(255,255,255,0.1);}.download-button:hover{background:rgba(255,255,255,0.2);transform:translateY(-3px);border-color:rgba(231,76,60,0.5);}.download-button i{font-size:24px;}.download-button span{font-size:clamp(1rem,3vw,1.1rem);font-weight:600;}footer{text-align:center;padding:40px 0;margin-top:60px;border-top:1px solid rgba(255,255,255,0.1);color:var(--gray);font-size:0.95rem;}.footer-links{display:flex;justify-content:center;gap:30px;margin:20px 0;flex-wrap:wrap;}.footer-links a{color:var(--gray);text-decoration:none;transition:color 0.3s ease;}.footer-links a:hover{color:var(--primary);}@media (max-width:768px){.step-header{flex-direction:column;text-align:center;}.step-number{align-self:center;}.download-buttons,.achievement-links{flex-direction:column;align-items:center;}}@media (max-width:480px){header{padding:30px 0 10px;}.hero{padding:30px 20px;}.roles-container{flex-direction:column;align-items:center;}.role-card{width:100%;max-width:350px;}}</style><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"></head><body><div class="container"><header><h1 class="logo">Pizza Planet</h1><div class="badge">🥉 3-е место на Хакатоне Samsung</div><p class="subtitle">Революционная платформа для доставки пиццы, созданная за 48 часов. Клиенты заказывают — курьеры выбирают заказы. Просто. Умно. Вкусно.</p></header><div class="hero"><div class="hero-content"><h2 class="hero-title">Выбери свою роль в Pizza Planet</h2><p class="hero-desc">Ты голоден? Или хочешь заработать, доставляя радость другим? В Pizza Planet каждый находит свое место.</p><div class="roles-container"><div class="role-card"><i class="fas fa-user customer-icon role-icon"></i><h3 class="role-title">Я клиент</h3><p class="role-desc">Выбираю ближайшие пиццерии, составляю заказ и выставляю его на доску. Жду курьера, который привезет мне вкуснейшую пиццу!</p></div><div class="role-card"><i class="fas fa-motorcycle courier-icon role-icon"></i><h3 class="role-title">Я курьер</h3><p class="role-desc">Выбираю заказы от ближайших клиентов, получаю оптимальный маршрут до пиццерии и затем до дома клиента. Зарабатываю, доставляя счастье!</p></div></div><button class="cta-button">Начать сейчас</button></div></div><h2 class="section-title">Как это работает</h2><div class="steps-container"><div class="step-card"><div class="step-header"><div class="step-number">1</div><h3 class="step-title">Клиент создает заказ</h3></div><div class="step-content"><p class="step-desc">Клиент выбирает ближайшие пиццерии, просматривает меню, составляет идеальный заказ и выставляет его на общую доску заказов. Система автоматически рассчитывает примерную стоимость и время доставки.</p><div class="step-image">🍕 Выбор пиццерии → 🍕 Составление заказа → 📝 Публикация на доске</div></div></div><div class="step-card"><div class="step-header"><div class="step-number">2</div><h3 class="step-title">Курьер выбирает заказ</h3></div><div class="step-content"><p class="step-desc">Курьер видит заказы от ближайших клиентов. Приложение показывает оптимальный маршрут: сначала до выбранной пиццерии, затем — до дома клиента. Курьер может выбрать заказ, который ему по пути или наиболее выгоден.</p><div class="step-image">🗺️ Карта заказов → 🚗 Оптимальный маршрут → ✅ Выбор заказа</div></div></div><div class="step-card"><div class="step-header"><div class="step-number">3</div><h3 class="step-title">Доставка и оплата</h3></div><div class="step-content"><p class="step-desc">Курьер забирает заказ из пиццерии и доставляет клиенту. Оплата происходит через приложение — безопасно и удобно. Клиент оценивает доставку, курьер получает рейтинг. Все довольны!</p><div class="step-image">🏪 Забрать заказ → 🏠 Доставить клиенту → 💰 Оплата и рейтинг</div></div></div></div><div class="achievement"><h3 class="achievement-title">Признание на Хакатоне Samsung</h3><p class="achievement-desc">Наша команда создала Pizza Planet всего за 2 дня и заняла 3-е место на Хакатоне Samsung в рамках Innovation Campus 2023. Проект оценили за инновационный подход к решению реальной проблемы — эффективной доставке еды.</p><div class="achievement-links"><a href="https://innovationcampus.ru/bootcamp%202023/?ysclid=mabkmuog96630763089" target="_blank" class="achievement-link"><i class="fas fa-award"></i><span>Сайт хакатона</span></a><a href="https://github.com/AlexanderOsharov/PizzaPlanet-Presentation/blob/main/PizzaPlanet.pptx" target="_blank" class="achievement-link"><i class="fas fa-file-powerpoint"></i><span>Презентация</span></a></div></div><h2 class="section-title">Преимущества Pizza Planet</h2><div class="features-grid"><div class="feature-card"><i class="fas fa-bolt feature-icon"></i><h3 class="feature-title">Создано за 48 часов</h3><p class="feature-desc">Полнофункциональная платформа, разработанная с нуля всего за два дня. Доказательство того, что хорошие идеи могут воплощаться быстро!</p></div><div class="feature-card"><i class="fas fa-map-marked-alt feature-icon"></i><h3 class="feature-title">Умная маршрутизация</h3><p class="feature-desc">Курьеры получают оптимальные маршруты до пиццерии и затем до клиента. Экономия времени и топлива!</p></div><div class="feature-card"><i class="fas fa-list feature-icon"></i><h3 class="feature-title">Доска заказов</h3><p class="feature-desc">Прозрачная система: клиенты публикуют заказы, курьеры выбирают те, что им подходят. Никакой централизованной диспетчерской!</p></div><div class="feature-card"><i class="fas fa-users feature-icon"></i><h3 class="feature-title">Гибкость для всех</h3><p class="feature-desc">Клиенты получают пиццу быстрее, курьеры сами выбирают, когда и какие заказы выполнять. Выигрывают все!</p></div><div class="feature-card"><i class="fas fa-medal feature-icon"></i><h3 class="feature-title">Призер хакатона</h3><p class="feature-desc">3-е место на престижном Хакатоне Samsung — признание инновационности и практической ценности нашего решения.</p></div><div class="feature-card"><i class="fas fa-pizza-slice feature-icon"></i><h3 class="feature-title">Фокус на пицце</h3><p class="feature-desc">Специализированная платформа для доставки пиццы — мы знаем, что важно именно для этого вкусного бизнеса!</p></div></div><div class="final-cta"><h2>Готовы присоединиться к Pizza Planet?</h2><p>Станьте частью революции в доставке пиццы! Закажите свою первую пиццу или начните зарабатывать как курьер уже сегодня.</p><button class="cta-button">Начать бесплатно</button><div class="download-buttons"><a href="#" class="download-button"><i class="fab fa-apple"></i><span>App Store</span></a><a href="#" class="download-button"><i class="fab fa-google-play"></i><span>Google Play</span></a><a href="#" class="download-button"><i class="fas fa-web"></i><span>Веб-версия</span></a></div></div></div><footer><div class="container"><div class="footer-links"><a href="#">О нас</a><a href="#">Для пиццерий</a><a href="#">Поддержка</a><a href="#">Блог</a><a href="#">Контакты</a></div><p>© 2023 Pizza Planet. Платформа, созданная за 48 часов на Хакатоне Samsung. 🍕 Доставляем счастье, один заказ за раз.</p></div></footer><script>document.addEventListener(\'DOMContentLoaded\',function(){const buttons=document.querySelectorAll(\'.cta-button\');buttons.forEach(button=>{button.addEventListener(\'click\',function(){alert(\'Спасибо за интерес к Pizza Planet! Приложение находится в разработке и скоро будет доступно для скачивания.\');});});const observerOptions={threshold:0.1,rootMargin:\'0px 0px -50px 0px\'};const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.style.opacity="1";entry.target.style.transform="translateY(0)";}});},observerOptions);const animatedElements=document.querySelectorAll(\'.step-card, .feature-card, .role-card\');animatedElements.forEach(element=>{element.style.opacity="0";element.style.transform="translateY(30px)";element.style.transition="opacity 0.6s ease, transform 0.6s ease";observer.observe(element);});const handleMobileOptimization=()=>{const isMobile=window.innerWidth<=768;if(isMobile){document.body.style.paddingBottom=\'20px\';const titles=document.querySelectorAll(\'.hero-title, .section-title, .step-title, .feature-title\');titles.forEach(title=>{title.style.fontSize=\'clamp(1.5rem, 5vw, 2.2rem)\';});}};handleMobileOptimization();window.addEventListener(\'resize\',handleMobileOptimization);});</script></body></html>',
    title: 'Pizza Planet'
  },
  {
    src: 'PythonBin-post.png',
    link: 'Недостаточно прав',
    desc: '<!DOCTYPE html> <html lang="ru"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /><title>PythonBin — Pastebin для Python-разработчиков</title><style>*{margin:0;padding:0;box-sizing:border-box;}:root{--primary:#3776ab;--primary-dark:#2b5f88;--secondary:#4b9458;--accent:#ff6b35;--dark:#282c34;--darker:#1e2127;--light:#f8f9fa;--gray:#adb5bd;--code-bg:#2d333b;--gold-light:#f9e0bb;--gold:#e6c289;--gold-dark:#b89a5c;--cream:#fdf6e3;--terminal-bg:#1a1a2e;--terminal-border:#2d2d44;--soft-red:#d77a61;--radius:18px;}body{font - family:\'Fira Code\',ui-monospace,-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,sans-serif;background:linear-gradient(135deg,var(--darker),var(--dark));color:var(--light);line-height:1.6;min-height:100vh;position:relative;overflow-x:hidden;}body::before{content:"";position:fixed;top:0;left:0;width:100%;height:100%;background:radial-gradient(circle at 20% 30%,rgba(55,118,171,0.05)0%,transparent 40%),radial-gradient(circle at 80% 70%,rgba(75,148,88,0.05)0%,transparent 40%);z-index:-1;pointer-events:none;}.container{width:100%;max-width:1200px;margin:0 auto;padding:0 20px;}header{padding:40px 0 20px;text-align:center;position:relative;}.logo-container{display:flex;align-items:center;justify-content:center;gap:15px;margin-bottom:20px;}.logo{font - size:clamp(2.5rem,8vw,4.5rem);font-weight:800;background:linear-gradient(90deg,var(--primary),var(--secondary));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;letter-spacing:-1px;position:relative;display:inline-block;}.python-logo{font - size:clamp(1.5rem,5vw,2.5rem);color:var(--primary);animation:pulse 2s infinite;}@keyframes pulse{0 %, 100 % { transform: scale(1); }50%{transform:scale(1.1);}}.subtitle{font - size:clamp(1rem,4vw,1.3rem);font-weight:300;max-width:800px;margin:20px auto 40px;color:var(--gray);line-height:1.7;}.hero{background:rgba(40,44,52,0.6);border-radius:24px;padding:clamp(30px,6vw,60px);margin:40px 0;position:relative;overflow:hidden;border:1px solid rgba(255,255,255,0.1);box-shadow:0 20px 40px rgba(0,0,0,0.2);}.hero-content{position:relative;z-index:2;text-align:center;}.hero-title{font - size:clamp(1.8rem,6vw,2.8rem);font-weight:700;margin-bottom:20px;color:white;}.hero-desc{font - size:clamp(1rem,3vw,1.2rem);margin-bottom:30px;color:var(--gray);max-width:700px;margin-left:auto;margin-right:auto;}.product-banner{background:linear-gradient(90deg,#1a1a2e,#2d2d44,#1a1a2e);border:1px solid rgba(249,224,187,0.3);padding:20px;border-radius:var(--radius);margin:20px 0;text-align:center;animation:banner-pulse 4s infinite;position:relative;overflow:hidden;}.product-banner::before{content:\'\';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(249,224,187,0.1),transparent);transition:all 0.5s;}.product-banner:hover::before{left:100%;}.product-banner h2{color:var(--gold-light);margin-bottom:10px;font-size:1.3rem;text-shadow:0 0 10px rgba(249,224,187,0.5);}.product-banner p{color:var(--gray);font-size:0.95rem;margin-bottom:15px;line-height:1.5;}.product-features{display:flex;justify-content:space-around;flex-wrap:wrap;gap:10px;margin-top:15px;}.feature-badge{background:rgba(230,194,137,0.15);padding:8px 15px;border-radius:20px;font-size:0.8rem;border:1px solid rgba(230,194,137,0.3);backdrop-filter:blur(5px);transition:all 0.3s ease;color:var(--gold-light);}.feature-badge:hover{transform:scale(1.05);background:rgba(249,224,187,0.2);border-color:rgba(249,224,187,0.5);}@keyframes banner-pulse{0 % { box- shadow:0 0 5px rgba(249,224,187,0.2);}50%{box - shadow:0 0 20px rgba(249,224,187,0.4);}100%{box - shadow:0 0 5px rgba(249,224,187,0.2);}}@keyframes glow{0 % { text- shadow:0 0 5px var(--gold-light);}50%{text - shadow:0 0 20px var(--gold-light),0 0 30px var(--gold-light);}100%{text - shadow:0 0 5px var(--gold-light);}}.glow-text{animation:glow 2s infinite;}.code-editor{background:var(--terminal-bg);color:var(--cream);border-radius:12px;padding:25px;margin:40px 0;font-family:\'Fira Code\',\'Courier New\',monospace;font-size:clamp(1rem,4vw,1.1rem);line-height:1.5;overflow-x:auto;border:1px solid var(--terminal-border);position:relative;white-space:pre;text-align:left;}.code-line{display:flex;margin-bottom:5px;align-items:flex-start;}.line-number{color:#7f848e;text-align:right;padding-right:15px;user-select:none;min-width:30px;font-variant-numeric:tabular-nums;}.kw{color:var(--gold-dark);font-weight:600;}.str{color:#a8c08c;}.num{color:var(--gold);}.func{color:#d2a88c;}.var{color:var(--gold-dark);}.punct{color:#7f848e;}.cm{color:#6b7080;font-style:italic;}.attr{color:#a8c08c;}.class{color:var(--gold);}.module{color:var(--gold-dark);}.operator{color:#d2a88c;}.comment{color:#6b7080;}.decorator{color:#d2a88c;}.builtin{color:#a8c08c;}.constant{color:var(--gold);}.btn-container{display:flex;flex-wrap:wrap;gap:15px;justify-content:center;margin:20px 0 40px;}.btn{border:0;padding:16px 28px;border-radius:12px;font-weight:700;cursor:pointer;background:linear-gradient(45deg,var(--gold-light),var(--gold));color:#111;box-shadow:0 4px 12px rgba(0,0,0,.4);font-size:clamp(1rem,4vw,1.1rem);transition:all 0.3s ease;min-width:200px;}.btn:hover{transform:translateY(-3px);box-shadow:0 6px 16px rgba(0,0,0,.5);}.btn.secondary{background:transparent;color:var(--light);border:1px solid var(--stroke);box-shadow:none;}.btn.secondary:hover{background:rgba(255,255,255,0.1);border-color:var(--gold-light);}.choices{display:none;flex-wrap:wrap;gap:8px;margin:10px 0 20px;justify-content:center;}.choice{flex:1;min-width:120px;padding:12px;border-radius:10px;border:1px solid var(--terminal-border);text-align:center;cursor:pointer;font-size:clamp(0.9rem,3.5vw,1rem);transition:all 0.3s ease;background:var(--terminal-bg);color:var(--cream);}.choice[data-best="true"]{border - color:var(--gold);}.choice.active{background:linear-gradient(45deg,var(--gold-light),var(--gold));color:#111;font-weight:700;transform:translateY(-2px);}.log{background:var(--terminal-bg);border:1px solid var(--terminal-border);border-radius:var(--radius);padding:15px;font-family:\'Fira Code\',monospace;font-size:clamp(0.9rem,3.5vw,1rem);height:180px;overflow-y:auto;margin-top:20px;line-height:1.4;color:var(--cream);text-align:left;}.log div{margin - bottom:4px;padding:2px 0;}.ok{color:#a8c08c;}.err{color:var(--soft-red);}.warn{color:var(--gold);}.var{color:var(--gold-dark);font-weight:600;}@keyframes highlight{0 %, 100 % { background- color:transparent;}50%{background - color:rgba(230,194,137,0.2);}}.section-title{font - size:clamp(2rem,6vw,2.8rem);font-weight:700;text-align:center;margin:60px 0 40px;position:relative;display:inline-block;left:50%;transform:translateX(-50%);}.section-title::after{content:"";position:absolute;bottom:-10px;left:50%;transform:translateX(-50%);width:100px;height:3px;background:linear-gradient(90deg,var(--primary),var(--secondary));border-radius:2px;}.features-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:30px;margin:40px 0;}.feature-card{background:rgba(40,44,52,0.7);border-radius:16px;padding:30px;transition:all 0.3s ease;border:1px solid rgba(255,255,255,0.05);position:relative;overflow:hidden;}.feature-card:hover{transform:translateY(-5px);box-shadow:0 20px 40px rgba(0,0,0,0.3);border-color:rgba(55,118,171,0.3);}.feature-icon{font - size:clamp(2.5rem,8vw,3rem);margin-bottom:20px;color:var(--primary);display:block;}.feature-title{font - size:clamp(1.3rem,4vw,1.6rem);font-weight:600;margin-bottom:15px;color:white;}.feature-desc{font - size:clamp(0.95rem,3vw,1.1rem);color:var(--gray);line-height:1.7;}.comparison{background:rgba(30,33,39,0.7);border-radius:24px;padding:40px;margin:60px 0;border:1px solid rgba(255,255,255,0.1);}.comparison-title{text - align:center;font-size:clamp(2rem,6vw,2.5rem);font-weight:700;margin-bottom:40px;color:white;}.comparison-table{width:100%;border-collapse:collapse;margin:0 auto;max-width:1000px;}.comparison-table th,.comparison-table td{padding:15px;text-align:left;border-bottom:1px solid rgba(255,255,255,0.1);}.comparison-table th{font - weight:600;color:var(--primary);font-size:clamp(1rem,3vw,1.2rem);}.comparison-table td{font - size:clamp(0.95rem,2.8vw,1.1rem);color:var(--light);}.check{color:var(--secondary);font-size:1.2rem;}.cross{color:var(--accent);font-size:1.2rem;}.cta-button{background:linear-gradient(90deg,var(--primary),var(--secondary));color:white;font-size:clamp(1rem,3vw,1.2rem);font-weight:600;padding:16px 40px;border:none;border-radius:12px;cursor:pointer;transition:all 0.3s ease;box-shadow:0 10px 25px rgba(55,118,171,0.3);text-transform:uppercase;letter-spacing:1px;display:inline-block;margin:20px 0;}.cta-button:hover{transform:translateY(-3px);box-shadow:0 15px 35px rgba(55,118,171,0.5);background:linear-gradient(90deg,var(--primary-dark),var(--secondary));}.final-cta{text - align:center;padding:60px 20px;background:linear-gradient(135deg,rgba(55,118,171,0.1),rgba(75,148,88,0.1));border-radius:24px;margin:60px 0;border:1px solid rgba(55,118,171,0.3);}.final-cta h2{font - size:clamp(2rem,6vw,3rem);font-weight:700;margin-bottom:20px;color:white;}.final-cta p{font - size:clamp(1.1rem,4vw,1.3rem);max-width:700px;margin:0 auto 40px;color:var(--gray);line-height:1.7;}.action-buttons{display:flex;flex-wrap:wrap;justify-content:center;gap:20px;margin-top:30px;}.action-button{display:flex;align-items:center;gap:15px;background:rgba(255,255,255,0.1);color:white;padding:15px 30px;border-radius:12px;text-decoration:none;transition:all 0.3s ease;border:1px solid rgba(255,255,255,0.1);}.action-button:hover{background:rgba(255,255,255,0.2);transform:translateY(-3px);border-color:rgba(55,118,171,0.5);}.action-button i{font - size:24px;}.action-button span{font - size:clamp(1rem,3vw,1.1rem);font-weight:600;}footer{text - align:center;padding:40px 0;margin-top:60px;border-top:1px solid rgba(255,255,255,0.1);color:var(--gray);font-size:0.95rem;}.footer-links{display:flex;justify-content:center;gap:30px;margin:20px 0;flex-wrap:wrap;}.footer-links a{color:var(--gray);text-decoration:none;transition:color 0.3s ease;}.footer-links a:hover{color:var(--primary);}@media (max-width:768px){.code - editor{font - size:1rem;padding:20px 15px;}.log{font - size:0.95rem;height:160px;}.btn-container{flex - direction:column;align-items:stretch;}.btn{width:100%;min-width:auto;padding:14px 24px;}.choice{min - width:auto;padding:10px;}.hero{padding:30px 20px;}.section-title{font - size:2rem;}.feature-title{font - size:1.3rem;}}@media (max-width:480px){header{padding:30px 0 10px;}.logo-container{flex - direction:column;text-align:center;}.action-buttons{flex - direction:column;align-items:center;}.code-editor{font - size:1rem;padding:15px 10px;}.log{font - size:0.9rem;height:140px;}.btn{padding:12px 20px;font-size:1rem;}.choice{padding:8px;font-size:0.9rem;}}</style><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"></head><body><div class="container"><header><div class="logo-container"><h1 class="logo">PythonBin</h1><i class="fab fa-python python-logo"></i></div><p class="subtitle">Специализированный Pastebin для Python-разработчиков. Синтаксис, форматирование, удобство — всё для Python, только для Python.</p></header><div class="hero"><div class="hero-content"><h2 class="hero-title">Pastebin, но только для Python</h2><p class="hero-desc">Забудьте о неудобных универсальных сервисах. PythonBin создан разработчиками Python для разработчиков Python. Идеальное форматирование, подсветка синтаксиса, удобный интерфейс — всё, что нужно для работы с Python-кодом.</p><div class="product-banner"><h2 class="glow-text">PythonBin Ultimate</h2><p>Премиальный инструмент для профессиональных Python-разработчиков</p><div class="product-features"><div class="feature-badge">Точность</div><div class="feature-badge">PEP 8</div><div class="feature-badge">REPL</div><div class="feature-badge">Зависимости</div></div></div><div class="code-editor" id="code-block"></div><div class="btn-container"><button class="btn" id="run-btn"><i class="fas fa-play"></i> Запустить</button><button class="btn secondary" id="copy-btn"><i class="fas fa-copy"></i> Копировать</button></div><div class="choices" id="choices"><div class="choice" data-id="pip" data-best="true">PyPI (pip)</div><div class="choice" data-id="conda">Conda</div><div class="choice" data-id="apt">System (apt)</div></div><div class="log" id="log"></div></div></div><h2 class="section-title">Почему PythonBin?</h2><div class="features-grid"><div class="feature-card"><i class="fas fa-code feature-icon"></i><h3 class="feature-title">Идеальная подсветка синтаксиса</h3><p class="feature-desc">Автоматическое распознавание всех элементов Python: ключевые слова, функции, строки, числа, комментарии. Код выглядит так же, как в вашем любимом IDE.</p></div><div class="feature-card"><i class="fas fa-bolt feature-icon"></i><h3 class="feature-title">Мгновенное форматирование</h3><p class="feature-desc">Вставьте код — и он автоматически отформатируется с правильными отступами. Никакого ручного выравнивания. PythonBin позаботится о PEP 8 за вас.</p></div><div class="feature-card"><i class="fas fa-share-alt feature-icon"></i><h3 class="feature-title">Простой обмен</h3><p class="feature-desc">Один клик — и ссылка на ваш код готова для отправки коллегам, публикации на форумах или вставки в документацию. Поддержка приватных и публичных сниппетов.</p></div><div class="feature-card"><i class="fas fa-history feature-icon"></i><h3 class="feature-title">История версий</h3><p class="feature-desc">Редактируете код? Все изменения сохраняются. Можно вернуться к любой предыдущей версии. Никакого страха случайно испортить рабочий код.</p></div><div class="feature-card"><i class="fas fa-terminal feature-icon"></i><h3 class="feature-title">Встроенный REPL</h3><p class="feature-desc">Не просто храните код — тестируйте его прямо в браузере! Встроенный интерпретатор Python позволяет запускать код и видеть результат без переключения между приложениями.</p></div><div class="feature-card"><i class="fas fa-project-diagram feature-icon"></i><h3 class="feature-title">Умные зависимости</h3><p class="feature-desc">Указываете, какие библиотеки используете? PythonBin автоматически добавит информацию о зависимостях и даже предложит альтернативы для популярных пакетов.</p></div></div><div class="comparison"><h3 class="comparison-title">PythonBin vs Обычные Pastebin</h3><table class="comparison-table"><thead><tr><th>Функция</th><th>PythonBin</th><th>Обычные Pastebin</th></tr></thead><tbody><tr><td>Подсветка синтаксиса Python</td><td><i class="fas fa-check check"></i></td><td><i class="fas fa-times cross"></i> или частичная</td></tr><tr><td>Автоматическое форматирование</td><td><i class="fas fa-check check"></i></td><td><i class="fas fa-times cross"></i></td></tr><tr><td>Встроенный REPL (интерпретатор)</td><td><i class="fas fa-check check"></i></td><td><i class="fas fa-times cross"></i></td></tr><tr><td>Управление зависимостями</td><td><i class="fas fa-check check"></i></td><td><i class="fas fa-times cross"></i></td></tr><tr><td>Анализ качества кода</td><td><i class="fas fa-check check"></i></td><td><i class="fas fa-times cross"></i></td></tr><tr><td>Интеграция с GitHub/GitLab</td><td><i class="fas fa-check check"></i></td><td><i class="fas fa-check check"></i> (ограниченно)</td></tr><tr><td>Поддержка Jupyter-ноутбуков</td><td><i class="fas fa-check check"></i></td><td><i class="fas fa-times cross"></i></td></tr><tr><td>Специфичные для Python шаблоны</td><td><i class="fas fa-check check"></i></td><td><i class="fas fa-times cross"></i></td></tr></tbody></table></div><h2 class="section-title">Для кого PythonBin?</h2><div class="features-grid"><div class="feature-card"><i class="fas fa-laptop-code feature-icon"></i><h3 class="feature-title">Профессиональные разработчики</h3><p class="feature-desc">Делитесь кодом с коллегами, сохраняйте фрагменты для будущих проектов, тестируйте идеи в встроенном REPL — всё в одном месте, оптимизированном для Python.</p></div><div class="feature-card"><i class="fas fa-graduation-cap feature-icon"></i><h3 class="feature-title">Студенты и новички</h3><p class="feature-desc">Учитесь Python? PythonBin поможет вам правильно форматировать код, избегать распространённых ошибок и мгновенно видеть результат выполнения.</p></div><div class="feature-card"><i class="fas fa-chalkboard-teacher feature-icon"></i><h3 class="feature-title">Преподаватели и менторы</h3><p class="feature-desc">Проверяйте задания студентов, делитесь примерами кода, создавайте шаблоны для заданий — с идеальным форматированием и подсветкой синтаксиса.</p></div><div class="feature-card"><i class="fas fa-project-diagram feature-icon"></i><h3 class="feature-title">Open Source контрибьюторы</h3><p class="feature-desc">Обсуждайте баги, предлагайте патчи, делитесь примерами воспроизведения проблем — всё с сохранением истории изменений и возможностью запуска кода.</p></div></div><div class="final-cta"><h2>Готовы упростить работу с Python-кодом?</h2><p>Присоединяйтесь к тысячам Python-разработчиков, которые уже выбрали специализированный инструмент для своей работы. Никаких компромиссов, только Python.</p><button class="cta-button">Начать сейчас</button><div class="action-buttons"><a href="#" class="action-button"><i class="fas fa-terminal"></i><span>Веб-версия</span></a><a href="#" class="action-button"><i class="fab fa-github"></i><span>GitHub</span></a><a href="#" class="action-button"><i class="fas fa-code"></i><span>API Документация</span></a></div></div></div><footer><div class="container"><div class="footer-links"><a href="#">О нас</a><a href="#">Документация</a><a href="#">API</a><a href="#">Блог</a><a href="#">Контакты</a><a href="#">Политика конфиденциальности</a></div><p>© 2023 PythonBin. Специализированный Pastebin для Python-разработчиков. 🐍 Создано с любовью к Python.</p></div></footer><script>const uglyCode=`import numpy as np;from sklearn.decomposition import PCA\nX=np.random.randn(100,50);X=(X- X.mean(axis=0))/X.std(axis=0)\np=PCA(n_components = 2).fit(X);Y=p.transform(X);print ( "Variance captured:" ,f"{sum(p.explained_variance_ratio_):.2%}"   ) #wow`;const prettyCode=`import numpy as np\nfrom sklearn.decomposition import PCA\n\ndef main() -> None:\n    X = np.random.randn(100, 50)\n    X = (X - X.mean(axis=0)) / X.std(axis=0)\n    pca = PCA(n_components=2).fit(X)\n    variance = float(pca.explained_variance_ratio_.sum())\n    print(f"Variance captured: {variance:.2%}")\n\nif __name__ == "__main__":\n    main()`;const codeBlock=document.getElementById(\'code-block\');const log=document.getElementById(\'log\');const choices=document.getElementById(\'choices\');let fixed=false;let source=null;function colorize(code){return code.split("\\n").map((ln,i)=>{return `<span class=\'line-number\'>${String(i + 1).padStart(2,\' \')}</span>`+ln.split(/(\\s+|[^\\w\\s])/).map(token=>{if(!token.trim())return token;if([\'import\',\'from\',\'def\',\'return\',\'if\',\'in\',\'as\',\'class\',\'try\',\'except\',\'with\',\'for\',\'while\',\'lambda\',\'elif\',\'else\',\'break\',\'continue\',\'pass\',\'yield\',\'assert\',\'del\',\'global\',\'nonlocal\',\'raise\',\'True\',\'False\',\'None\'].includes(token)){return `<span class="kw">${token}</span>`;}else if([\'print\',\'len\',\'range\',\'float\',\'int\',\'str\',\'np\',\'sklearn\',\'PCA\',\'mean\',\'std\',\'fit\',\'transform\',\'sum\',\'float\',\'main\'].includes(token)){return `<span class="func">${token}</span>`;}else if(/^(X|p|Y|pca|variance|data|result|matrix|means|stds|row|col|value|u|v)$/.test(token)){return `<span class="var">${token}</span>`;}else if(/^(100|50|2)$/.test(token)){return `<span class="constant">${token}</span>`;}else if([\'numpy\',\'sklearn\',\'decomposition\'].includes(token)){return `<span class="module">${token}</span>`;}else if(token.includes(\'.\')){return `<span class="attr">${token}</span>`;}else if(/["\'].*?["\']/.test(token)){return `<span class="str">${token}</span>`;}else if(/^\\d+(\\.\\d+)?$/.test(token)){return `<span class="num">${token}</span>`;}else if(/[\\=\\+\\-\\*\\/\\%\\.\\,\\:\\(\\)\\[\\]\\{\\}]/.test(token)){return `<span class="punct">${token}</span>`;}else if(token.startsWith(\'#\')){return `<span class="comment">${token}</span>`;}else if(token.startsWith(\'@\')){return `<span class="decorator">${token}</span>`;}else if([\'abs\',\'all\',\'any\',\'bool\',\'complex\',\'dict\',\'enumerate\',\'filter\',\'hex\',\'input\',\'int\',\'isinstance\',\'iter\',\'list\',\'map\',\'max\',\'min\',\'next\',\'oct\',\'open\',\'ord\',\'pow\',\'repr\',\'reversed\',\'round\',\'set\',\'slice\',\'sorted\',\'str\',\'tuple\',\'type\',\'zip\'].includes(token)){return `<span class="builtin">${token}</span>`;}return token;}).join(\'\');}).join("\\n");}function setCode(code){codeBlock.innerHTML = colorize(code);}function logLine(msg,cls=""){log.innerHTML += `<div class=\'${cls}\'>${msg}</div>`;log.scrollTop=log.scrollHeight;}function sleep(ms){return new Promise(resolve=>setTimeout(resolve,ms));}function gaussianRandom(){let u=0,v=0;while(u===0)u=Math.random();while(v===0)v=Math.random();return Math.sqrt(-2.0*Math.log(u))*Math.cos(2.0*Math.PI*v);}function centerData(X){const rows=X.length;const cols=X[0].length;const means=new Array(cols).fill(0);for(let j=0;j<cols;j++){let sum=0;for(let i=0;i<rows;i++){sum += X[i][j];}means[j]=sum/rows;}const X_centered=[];for(let i=0;i<rows;i++){const row=[];for(let j=0;j<cols;j++){row.push(X[i][j] - means[j]);}X_centered.push(row);}return X_centered;}function normalizeData(X){const rows=X.length;const cols=X[0].length;const stds=new Array(cols).fill(0);for(let j=0;j<cols;j++){let sum=0;for(let i=0;i<rows;i++){sum += X[i][j] * X[i][j];}stds[j]=Math.sqrt(sum/(rows-1));}const X_normalized=[];for(let i=0;i<rows;i++){const row=[];for(let j=0;j<cols;j++){if(Math.abs(stds[j])<1e-10){row.push(X[i][j]);}else{row.push(X[i][j] / stds[j]);}}X_normalized.push(row);}return X_normalized;}function calculateCovarianceMatrix(X){const rows=X.length;const cols=X[0].length;const covMatrix=[];for(let i=0;i<cols;i++){covMatrix[i] = [];for(let j=0;j<cols;j++){let sum=0;for(let k=0;k<rows;k++){sum += X[k][i] * X[k][j];}covMatrix[i][j]=sum/(rows-1);}}return covMatrix;}function eig(matrix){const n=matrix.length;const tolerance=1e-10;const maxIterations=1000;let V=[];for(let i=0;i<n;i++){V[i] = [];for(let j=0;j<n;j++){V[i][j] = (i === j) ? 1 : 0;}}let A=[];for(let i=0;i<n;i++){A[i] = [...matrix[i]];}for(let iter=0;iter<maxIterations;iter++){let maxVal=0;let p=0,q=0;for(let i=0;i<n;i++){for(let j=i+1;j<n;j++){if(Math.abs(A[i][j])>maxVal){maxVal = Math.abs(A[i][j]);p=i;q=j;}}}if(maxVal<tolerance)break;const theta=(A[q][q]-A[p][p])/(2*A[p][q]);let tanTheta;if(Math.abs(theta)>1e10){tanTheta = theta > 0 ? 1 : -1;}else{tanTheta = 1 / (Math.abs(theta) + Math.sqrt(theta * theta + 1));if(theta<0)tanTheta=-tanTheta;}const c=1/Math.sqrt(1+tanTheta*tanTheta);const s=tanTheta*c;const temp=A[p][p];A[p][p]=c*c*A[p][p]-2*s*c*A[p][q]+s*s*A[q][q];A[q][q]=s*s*temp+2*s*c*A[p][q]+c*c*A[q][q];A[p][q]=A[q][p]=0;for(let i=0;i<n;i++){if(i!==p&&i!==q){const temp1=A[i][p];const temp2=A[i][q];A[i][p]=A[p][i]=c*temp1-s*temp2;A[i][q]=A[q][i]=s*temp1+c*temp2;}}for(let i=0;i<n;i++){const temp1 = V[i][p]; const temp2 = V[i][q]; V[i][p] = c * temp1 - s * temp2; V[i][q]=s*temp1+c*temp2;}}const eigenvalues=[];for(let i=0;i<n;i++){eigenvalues.push(A[i][i]);}return{values:eigenvalues,vectors:V};}function performPCA(X,n_components){const rows=X.length;const cols=X[0].length;const covarianceMatrix=calculateCovarianceMatrix(X);const eigenResult=eig(covarianceMatrix);const eigenvalues=eigenResult.values;const sortedIndices=eigenvalues.map((val,index)=>index);sortedIndices.sort((a,b)=>eigenvalues[b]-eigenvalues[a]);const selectedEigenvalues=[];for(let i=0;i<Math.min(n_components,eigenvalues.length);i++){const idx=sortedIndices[i];selectedEigenvalues.push(eigenvalues[idx]);}const totalVariance=eigenvalues.reduce((sum,val)=>sum+val,0);const explainedVariance=selectedEigenvalues.reduce((sum,val)=>sum+val,0);const variance=totalVariance>0?(explainedVariance/totalVariance):0;return{variance:variance*100};}async function run(trigger){log.innerHTML = "";if(trigger==="copy"){if(!fixed){logLine("Обнаружены нарушения PEP 8…", "warn");await sleep(300);setCode(prettyCode);logLine("Код переписан в PEP 8.","ok");fixed=true;}await navigator.clipboard.writeText(prettyCode);logLine("Код скопирован в буфер обмена.","ok");return;}if(!fixed){logLine("Обнаружены нарушения PEP 8…", "warn");await sleep(500);setCode(prettyCode);logLine("Код переписан в PEP 8.","ok");fixed=true;logLine("Поиск зависимостей…","warn");await sleep(600);choices.style.display="flex";return;}if(!source){logLine("Выберите источник библиотеки ниже.", "err");return;}logLine("Запуск виртуального интерпретатора Python...","warn");await sleep(800);const executionSteps=["[PYTHON] Initializing interpreter...","[PYTHON] Loading modules...","[PYTHON] Executing code...","[PYTHON] Processing data...","[PYTHON] Calculating variance...","[PYTHON] Generating report..."];for(let i=0;i<executionSteps.length;i++){await sleep(200);logLine(executionSteps[i],"ok");}logLine("Используем: "+source,"ok");await sleep(500);const rows=100;const cols=50;let X=[];for(let i=0;i<rows;i++){let row=[];for(let j=0;j<cols;j++){row.push(gaussianRandom());}X.push(row);}X=centerData(X);X=normalizeData(X);const result=performPCA(X,2);const variance=result.variance;logLine(`Variance captured: ${variance.toFixed(2)}%`,"var");logLine("✅ Расчёт завершён успешно","ok");logLine("📊 Результат основан на точной математической реализации PCA","ok");}document.getElementById(\'run-btn\').addEventListener(\'click\',()=>run("run"));document.getElementById(\'copy-btn\').addEventListener(\'click\',()=>run("copy"));choices.addEventListener(\'click\',(e)=>{const c=e.target.closest(".choice");if(!c)return;[...choices.children].forEach(x=>x.classList.remove("active"));c.classList.add("active");source=c.dataset.id;logLine("Вы выбрали "+c.textContent,"ok");});document.addEventListener(\'DOMContentLoaded\',function(){setCode(uglyCode);const codeLines=codeBlock.querySelectorAll(\'.code-line\');codeLines.forEach((line,index)=>{line.style.opacity = "0";line.style.transform="translateX(-20px)";line.style.transition=`opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;setTimeout(()=>{line.style.opacity = "1";line.style.transform="translateX(0)";},500);});const ctaButtons=document.querySelectorAll(\'.cta-button\');ctaButtons.forEach(button=>{button.addEventListener(\'click\',function(){alert(\'Спасибо за интерес к PythonBin! Сервис скоро будет доступен всем! Если хотите принять участие в бете-тестировании, то свяжитесь с @sanekosh в Telegram.\');});});});</script></body></html >',
    title: 'PythonBin'
  },
];

// Массив недоступных изображений
const unavailableIcons = [];
for (let i = 0; i <= 13; i++) {
  unavailableIcons.push(`image_unavailable_icon_${i}.png`);
}

let sessionRandomImage = null;

function initHistory() {
  if (!manifest) {
    setTimeout(initHistory, 100);
    return;
  }

  const track = document.querySelector('.history-track');
  if (!track) {
    console.log('history-track not found');
    return;
  }

  const exts = ['jpg', 'jpeg', 'png', 'webp', 'mp4', 'webm', 'ogg', 'gif', 'mp3', 'wav', 'm4a'];
  let images = manifest.images.filter(f => {
    const ext = f.split('.').pop().toLowerCase();
    const isPosterOrIcon = f.toLowerCase().includes('post') || f.toLowerCase().includes('icon');
    return exts.includes(ext) && !f.startsWith('avatar') && !isPosterOrIcon;
  });

  console.log('History images:', images);
  images.sort(() => Math.random() - 0.5);

  let index = 0;
  let scrollInterval = null;
  let isInteracting = false;

  track.innerHTML = '';
  track.style.cssText = `
    display: flex;
    gap: 16px;
    padding: 15px 0;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    position: relative;
  `;

  // === Горизонтальные размеры: ширина > высоты ===
  function getItemDimensions() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Базовые пропорции: ширина > высота (горизонтальный прямоугольник)
    if (vw <= 480) {
      // Мобилка: компактно
      return {
        width: Math.min(200, vw * 0.8),
        height: Math.min(110, vh * 0.18)
      };
    } else if (vw <= 768) {
      // Планшет
      return {
        width: 240,
        height: 130
      };
    } else {
      // Десктоп
      return {
        width: 280,
        height: 160
      };
    }
  }

  function getTrackDimensions() {
    return `
  display: flex;
  gap: ${gap}px;
  padding: 10px 0;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  position: relative;
  height: ${height + 20}px; /* Общая высота = карточка + отступы */
  max-height: ${height + 20}px;
  min-height: ${height * 0.8}px;
`;
  }

  function render() {
    track.innerHTML = '';
    //track.style.cssText = getTrackDimensions();
    const dimensions = getItemDimensions();
    const { width, height } = dimensions;

    const gap = Math.max(12, Math.min(20, width * 0.08));
    track.style.gap = `${gap}px`;

    const allItems = [];

    posts.forEach((post, idx) => {
      allItems.push({ type: 'post', data: post, index: idx });
    });

    images.forEach((img, idx) => {
      allItems.push({ type: 'image', data: img, index: idx + posts.length });
    });

    if (allItems.length === 0) return;

    const visibleCount = Math.min(7, allItems.length);
    const centerIndex = Math.floor(visibleCount / 2);

    for (let i = 0; i < visibleCount; i++) {
      const itemIndex = (index + i - centerIndex + allItems.length) % allItems.length;
      const item = allItems[itemIndex];
      const distance = Math.abs(i - centerIndex);
      const scale = distance === 0 ? 1.0 : distance === 1 ? 0.95 : 0.85;
      const zIndex = visibleCount - distance;

      const container = document.createElement('div');
      container.className = 'history-item-container';
      container.style.cssText = `
        width: ${width}px;
        height: ${height}px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        cursor: pointer;
        border-radius: 12px;
        overflow: hidden;
        transform: scale(${scale});
        z-index: ${zIndex};
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        flex-shrink: 0;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      `;

      // Hover только не на центре
      if (i !== centerIndex) {
        container.addEventListener('mouseenter', () => {
          container.style.transform = `scale(${scale * 1.05}) translateY(-4px)`;
          container.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
        });
        container.addEventListener('mouseleave', () => {
          container.style.transform = `scale(${scale})`;
          container.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        });
      }

      const content = document.createElement('div');
      content.style.cssText = `
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
      `;

      // === ЗАПОЛНЕНИЕ КОНТЕНТОМ ===
      if (item.type === 'post') {
        const post = item.data;
        const ext = post.src?.split('.').pop().toLowerCase() || '';
        const isVideo = ['mp4', 'webm', 'ogg'].includes(ext);
        const isGif = ext === 'gif';
        const isAudio = ['mp3', 'wav', 'm4a'].includes(ext);

        if (isAudio) {
          if (!sessionRandomImage) {
            sessionRandomImage = unavailableIcons[Math.floor(Math.random() * unavailableIcons.length)];
          }
          const img = document.createElement('img');
          img.src = `images/${sessionRandomImage}`;
          img.style.cssText = `width: 100%; height: 100%; object-fit: cover;`;
          content.appendChild(img);

          const audio = document.createElement('audio');
          audio.src = `audio/${post.src}`;
          audio.loop = true;
          audio.muted = true;
          audio.style.display = 'none';
          container.appendChild(audio);
        }
        else if (isVideo) {
          const video = document.createElement('video');

          // === Используем кэш из main.js ===
          if (videoCache.has(post.src)) {
            const cached = videoCache.get(post.src);
            video.src = cached.src;
            video.preload = 'metadata'; // Уже частично загружено
          } else {
            // Если нет в кэше — подключаем напрямую, но с preload
            video.src = `videos/${post.src}`;
            video.preload = 'metadata';
          }

          video.autoplay = true;
          video.loop = true;
          video.muted = true;
          video.style.cssText = `width: 100%; height: 100%; object-fit: cover;`;

          //video.addEventListener('canplay', () => {
          //  if (!video.started && !video.paused) {
          //    video.play().catch(() => { });
          //  }
          //});

          video.onerror = () => {
            content.innerHTML = '';
            showFallbackContent(content, post, true, sessionRandomImage);
          };

          video.load(); // Явно вызываем load()
          content.appendChild(video);
        }
        else if (isGif) {
          const img = document.createElement('img');
          img.src = `gif/${post.src}`;
          img.style.cssText = `width: 100%; height: 100%; object-fit: cover;`;
          img.onerror = () => showFallbackContent(content, post, true, sessionRandomImage);
          content.appendChild(img);
        }
        else if (post.src) {
          const img = document.createElement('img');
          img.src = `images/${post.src}`;
          img.style.cssText = `width: 100%; height: 100%; object-fit: cover;`;
          img.onerror = () => showFallbackContent(content, post, true, sessionRandomImage);
          content.appendChild(img);
        }
        else {
          showFallbackContent(content, post, true, sessionRandomImage);
        }

        // === ЗАГОЛОВОК (внизу, поверх) ===
        const title = post.title?.trim() && post.title.trim() !== ' '
          ? post.title
          : 'Собственность АО';

        const titleBar = document.createElement('div');
        titleBar.textContent = title;
        titleBar.style.cssText = `
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          font-size: 12px;
          font-weight: 500;
          padding: 6px 10px;
          text-align: center;
          z-index: 2;
          backdrop-filter: blur(2px);
          -webkit-backdrop-filter: blur(2px);
          border-radius: 0 0 12px 12px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        `;
        content.appendChild(titleBar);

        // Аудио on hover
        if (isAudio) {
          container.addEventListener('mouseenter', () => {
            if (bgAudio && !isModalOpen) bgAudio.pause();
            const audioEl = container.querySelector('audio');
            if (audioEl) {
              audioEl.muted = false;
              if (audioEl.paused) audioEl.play().catch(() => { });
            }
          });
          container.addEventListener('mouseleave', () => {
            if (bgAudio && !isModalOpen) bgAudio.play();
            const audioEl = container.querySelector('audio');
            if (audioEl) audioEl.muted = true;
          });
        }
      }
      else {
        const img = document.createElement('img');
        img.src = `images/${item.data}`;
        img.style.cssText = `width: 100%; height: 100%; object-fit: cover;`;
        img.onerror = () => showFallbackContent(content, {}, false, sessionRandomImage);
        content.appendChild(img);
      }

      container.appendChild(content);

      // === Клик и тач ===
      container.onclick = () => {
        if (item.type === 'post') {
          openMediaPost(item.data);
        } else {
          openMediaModal('image', item.data);
        }
      };

      container.addEventListener('touchstart', e => e.preventDefault());
      container.addEventListener('touchend', () => container.onclick());

      track.appendChild(container);
    }

    //prioritizeVisibleVideos();
  }

  // === Fallback ===
  function showFallbackContent(container, post, showDesc = true, iconPath = null) {
    container.innerHTML = '';
    const randomIcon = iconPath || sessionRandomImage || unavailableIcons[Math.floor(Math.random() * unavailableIcons.length)];

    const fallback = document.createElement('div');
    fallback.style.cssText = `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #f0f2f5 0%, #e2e6ec 100%);
    position: relative;
    color: #333;
    font-size: 12px;
    text-align: center;
    gap: 4px;
    padding: 8px;
  `;

    const bg = document.createElement('div');
    bg.style.cssText = `
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: url('images/${randomIcon}') center/cover no-repeat;
    opacity: 0.2;
    z-index: 1;
  `;
    fallback.appendChild(bg);

    // === Добавляем title, если есть ===
    if (false && (post.title && post.title.trim() !== '' && post.title.trim() !== ' ')) {
      const title = document.createElement('div');
      title.textContent = post.title && post.title.trim() !== '' && post.title.trim() !== ' ' ? post.title : "Собственность АО";
      title.style.cssText = `
      z-index: 2;
      font-size: 13px;
      font-weight: 500;
      color: #1a1a1a;
      background: rgba(255,255,255,0.7);
      padding: 4px 8px;
      border-radius: 6px;
      max-width: 90%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      backdrop-filter: blur(1px);
    `;
      fallback.appendChild(title);
    }
    else {
      // === ЗАГОЛОВОК (внизу, поверх) ===
      const title = post.title?.trim() && post.title.trim() !== ' '
        ? post.title
        : 'Собственность АО';

      const titleBar = document.createElement('div');
      titleBar.textContent = title;
      titleBar.style.cssText = `
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          font-size: 12px;
          font-weight: 500;
          padding: 6px 10px;
          text-align: center;
          z-index: 2;
          backdrop-filter: blur(2px);
          -webkit-backdrop-filter: blur(2px);
          border-radius: 0 0 12px 12px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        `;
      fallback.appendChild(titleBar);
    }

    // === Добавляем desc, если нужно ===
    if (showDesc && post.desc) {
      const desc = document.createElement('div');
      desc.innerHTML = post.desc.includes('<') ? post.desc : `<span>${post.desc}</span>`;
      desc.style.cssText = `
      z-index: 2;
      font-size: 11px;
      line-height: 1.3;
      background: rgba(255,255,255,0.7);
      padding: 4px 8px;
      border-radius: 4px;
      max-width: 90%;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      backdrop-filter: blur(1px);
    `;
      fallback.appendChild(desc);
    }

    container.appendChild(fallback);
  }

  // === Автоскролл ===
  function startAutoScroll() {
    if (scrollInterval) clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
      if (!isInteracting && !isModalOpen) {
        index = (index + 1) % (posts.length + images.length);
        render();
      }
    }, 10000);
  }

  startAutoScroll();

  // === Управление ===
  let startX = null;

  const handleStart = (e) => {
    isInteracting = true;
    startX = e.clientX || e.touches?.[0]?.clientX;
    track.style.transition = 'none';
  };

  const handleMove = (e) => {
    if (!startX || !isInteracting) return;
    const moveX = e.clientX || e.touches?.[0]?.clientX;
    const diff = startX - moveX;

    if (Math.abs(diff) > 30) {
      index = diff > 0 ? (index + 1) : (index - 1);
      index = (index + (posts.length + images.length)) % (posts.length + images.length);
      render();
      startX = moveX;
    }
  };

  const handleEnd = () => {
    isInteracting = false;
    startX = null;
    track.style.transition = '';
    setTimeout(() => isInteracting = false, 2000);
  };

  track.addEventListener('mousedown', handleStart);
  document.addEventListener('mousemove', handleMove);
  document.addEventListener('mouseup', handleEnd);

  track.addEventListener('touchstart', handleStart, { passive: false });
  document.addEventListener('touchmove', handleMove, { passive: false });
  document.addEventListener('touchend', handleEnd);

  track.addEventListener('wheel', (e) => {
    e.preventDefault();
    index = e.deltaY > 0 ? (index + 1) : (index - 1);
    index = (index + (posts.length + images.length)) % (posts.length + images.length);
    render();
  });

  window.addEventListener('resize', render);
  render();
}

function prioritizeVisibleVideos() {
  const visibleIndices = [];
  for (let i = -2; i <= 2; i++) {
    const idx = (index + i + (posts.length + images.length)) % (posts.length + images.length);
    visibleIndices.push(idx);
  }

  visibleIndices.forEach(idx => {
    const item = allItems[idx];
    if (item?.type === 'post' && item.data.src) {
      const ext = item.data.src.split('.').pop().toLowerCase();
      if (['mp4', 'webm', 'ogg'].includes(ext)) {
        preloadQueue.add(item.data.src, 'high');
      }
    }
  });
}