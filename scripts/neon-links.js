// Количество бликов на линиях
const TRAVEL_POINTS_COUNT = 20;
const BACKGROUND_POINTS_COUNT = 1250;
const canvas = document.getElementById('neon-canvas');
const ctx = canvas.getContext('2d');
const travelPoints = [];
const backgroundPoints = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight * 0.7;
}

window.addEventListener('resize', resize);
resize();

// Инициализация бликов на линиях (travel points)
for (let i = 0; i < TRAVEL_POINTS_COUNT; i++) {
  travelPoints.push({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    angle: 0,
    speed: 0.1 + Math.random() * 0.2,
    radius: 2 + Math.random() * 1,
    rotation: Math.random() * 360,
    rotSpeed: (Math.random() - 0.5) * 2,
    link: null,
    progress: 0,
    targetNode: null,
    arcProgress: 0,
    arcRadius: 0,
    arcAngle: 0,
    path: []
  });
}

// Инициализация фоновых бликов (background points)
for (let i = 0; i < BACKGROUND_POINTS_COUNT; i++) {
  backgroundPoints.push({
    x: Math.random() * window.innerWidth,
    y: Math.random() * (window.innerHeight * 0.7),
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    radius: 1 + Math.random() * 2,
    opacity: 0.2 + Math.random() * 0.3,
    color: `rgba(230, 57, 70, ${0.2 + Math.random() * 0.3})`
  });
}

function updateNeonLinks() {
  // Очищаем старые связи
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Неоновые линии между аватарками
  ctx.strokeStyle = '#e63946';
  ctx.lineWidth = 2;
  ctx.shadowColor = '#e63946';
  ctx.shadowBlur = 12;
  
  const links = [];
  
  if (window.nodes && window.nodes.length > 0) {
    window.nodes.forEach((a, i) => {
      window.nodes.slice(i + 1).forEach(b => {
        ctx.beginPath();
        ctx.moveTo(a.x + a.size/2, a.y + a.size/2);
        ctx.lineTo(b.x + b.size/2, b.y + b.size/2);
        ctx.stroke();
        links.push({ from: a, to: b });
      });
    });
  }
  
  // Фоновые блики (красные)
  backgroundPoints.forEach(point => {
    point.x += point.vx;
    point.y += point.vy;
    
    // Проверка границ
    if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
    if (point.y < 0 || point.y > canvas.height) point.vy *= -1;
    
    // Коллизия с аватарками
    if (window.nodes && window.nodes.length > 0) {
      window.nodes.forEach(node => {
        const dx = point.x - (node.x + node.size/2);
        const dy = point.y - (node.y + node.size/2);
        const dist = Math.sqrt(dx*dx + dy*dy);
        const min = node.size/2 + point.radius + 10;
        if (dist < min) {
          const angle = Math.atan2(dy, dx);
          point.x += Math.cos(angle) * (min - dist) * 0.5;
          point.y += Math.sin(angle) * (min - dist) * 0.5;
        }
      });
    }
    
    ctx.beginPath();
    ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
    ctx.fillStyle = point.color;
    ctx.fill();
  });
  
  // Блики на линиях (travel points)
  travelPoints.forEach(p => {
    if (links.length === 0) return;
    
    // Выбор случайной связи
    if (!p.link || Math.random() < 0.01) {
      p.link = links[Math.floor(Math.random() * links.length)];
      p.progress = 0;
      
      // Создаем путь по линии
      p.path = [];
      const { from, to } = p.link;
      const steps = 20;
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        p.path.push({
          x: from.x + (to.x - from.x) * t,
          y: from.y + (to.y - from.y) * t
        });
      }
    }
    
    const { from, to } = p.link;
    
    // Движение вдоль пути
    if (p.path.length > 0) {
      const currentIndex = Math.floor(p.progress * (p.path.length - 1));
      if (currentIndex < p.path.length - 1) {
        const nextIndex = currentIndex + 1;
        const t = (p.progress * (p.path.length - 1)) - currentIndex;
        p.x = p.path[currentIndex].x + (p.path[nextIndex].x - p.path[currentIndex].x) * t;
        p.y = p.path[currentIndex].y + (p.path[nextIndex].y - p.path[currentIndex].y) * t;
      } else {
        p.x = p.path[p.path.length - 1].x;
        p.y = p.path[p.path.length - 1].y;
      }
      
      p.progress += p.speed / p.path.length;
      
      // Обратно, если вышли
      if (p.progress > 1) {
        p.progress = 0;
        p.link = links[Math.floor(Math.random() * links.length)];
        
        // Создаем новый путь
        p.path = [];
        const { from, to } = p.link;
        const steps = 20;
        for (let i = 0; i <= steps; i++) {
          const t = i / steps;
          p.path.push({
            x: from.x + (to.x - from.x) * t,
            y: from.y + (to.y - from.y) * t
          });
        }
      }
    }
    
    // Вращение
    p.rotation += p.rotSpeed;
    if (Math.random() < 0.01) p.rotSpeed *= -1;
    
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation * Math.PI / 180);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(-p.radius, -p.radius, p.radius * 2, p.radius * 2);
    ctx.restore();
  });
}

function draw() {
  updateNeonLinks();
  requestAnimationFrame(draw);
}

draw();