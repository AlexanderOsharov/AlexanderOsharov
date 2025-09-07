// Количество активных панелек внизу
const MAX_PANELS = 2;
const MIN_PANELS = 1;

// Храним панельки
const panels = [];

// Загружаем пожелания из JSON
async function startDynamicMotivations() {
  let wishes = [
    "Я создавал обучаемые модели NLP с использованием трансформеров и BPE-токенизации.",
    "Я проектировал хранение графов с использованием алгоритмов Тарьяна и поиска мостов!",
    "Я писал движок для рендеринга с реализацией Phong shading и PBR — и это уровень эксперта.",
    "Я использовал GPU-шейдеры для ускорения параллельных вычислений — доказательство моих знаний.",
    "Я умею объяснить разницу между lock-free и wait-free алгоритмами и применял их на практике — и это вдохновляет меня идти дальше.",
    "Я проектировал распределённые системы с балансировкой нагрузки через Consistent Hashing и кастомный шардирующий алгоритм.",
    "У меня есть опыт реализации виртуальной машины с JIT-компиляцией и управлением памятью на низком уровне!",
    "Я использовал SIMD-инструкции и векторизацию для ускорения численных вычислений — и это уровень эксперта."
  ];

  // Попробуем загрузить из wishes.json
  try {
    const res = await fetch('wishes.json');
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.wishes) && data.wishes.length > 0) {
        wishes = data.wishes;
      }
    }
  } catch (e) {
    console.log("wishes.json не найден или повреждён — используем fallback");
  }

  // Функция создания новой панельки
  function createPanel() {
    if (panels.length >= MAX_PANELS) return;

    const zone = document.getElementById('motivation');
    const panel = document.createElement('div');
    panel.className = 'motivation-panel';
    
    const text = document.createElement('p');
    text.textContent = wishes[Math.floor(Math.random() * wishes.length)];
    panel.appendChild(text);

    // При клике — увеличиваем (только текст)
    panel.onclick = () => openMediaModal('text', text.textContent);

    // При наведении — плавно увеличиваем
    panel.onmouseenter = () => { 
      panel.style.transform = 'scale(1.05)';
      panel.style.zIndex = '100';
    };
    panel.onmouseleave = () => { 
      panel.style.transform = 'scale(1)';
      panel.style.zIndex = '1';
    };

    zone.appendChild(panel);
    panels.push(panel);

    // Плавное появление
    setTimeout(() => {
      panel.style.opacity = '1';
    }, 10);

    // Срок жизни: 6–15 сек
    const lifetime = 6000 + Math.random() * 9000;

    const timeout = setTimeout(() => {
      panel.style.opacity = '0';
      setTimeout(() => {
        const index = panels.indexOf(panel);
        if (index !== -1) panels.splice(index, 1);
        zone.removeChild(panel);

        // После удаления: либо создаём новую, либо ничего
        if (panels.length >= MIN_PANELS && Math.random() > 0.3) {
          createPanel();
        }
      }, 500);
    }, lifetime);
  }

  // Инициализация: создать 2–3 панельки
  const initialCount = MIN_PANELS + Math.floor(Math.random() * 2); // 2 или 3
  for (let i = 0; i < initialCount; i++) {
    setTimeout(createPanel, i * 600);
  }

  // Добавляем новые раз в 3–6 сек
  setInterval(() => {
    if (panels.length < MAX_PANELS) {
      createPanel();
    }
  }, 3000 + Math.random() * 3000);
}