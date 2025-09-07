const fs = require('fs');
const path = require('path');

const manifest = {
  images: fs.readdirSync('images').filter(f => 
    /\.(jpe?g|png|webp|gif|bmp|tiff)$/i.test(f)
  ),
  audio: fs.readdirSync('audio').filter(f => 
    /\.(mp3|wav|m4a|ogg|flac)$/i.test(f)
  ),
  videos: fs.readdirSync('videos').filter(f => 
    /\.(mp4|webm|mov|avi)$/i.test(f)
  )
};

fs.writeFileSync('manifest.json', JSON.stringify(manifest, null, 2));
console.log('✅ manifest.json сгенерирован!');