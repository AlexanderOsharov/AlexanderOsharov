async function initBackground() {
  if (!manifest) return;
  
  const exts = ['jpg', 'jpeg', 'png', 'webp', 'gif'];
  let images = manifest.images.filter(f => {
    const ext = f.split('.').pop().toLowerCase();
    return exts.includes(ext) && !f.startsWith('avatar');
  });
  
  // Перемешиваем
  images.sort(() => Math.random() - 0.5);
  
  const wall = document.getElementById('background-wall');
  
  function addImg() {

  }
  
  // Быстрее заполняем
  for (let i = 0; i < 10; i++) addImg();
  
  setInterval(addImg, 2000); // каждые 2 секунды
}