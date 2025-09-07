const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Путь к папке с видео
const inputDir = path.join(__dirname, 'videos');
const outputDir = inputDir; // Сохраняем в ту же папку

// Функция для перекодирования видео
const optimizeVideos = () => {
  // Читаем файлы в директории
  fs.readdir(inputDir, (err, files) => {
    if (err) {
      console.error('Ошибка при чтении директории:', err);
      return;
    }

    // Фильтруем только видеофайлы
    const videoFiles = files.filter(file =>
      file.endsWith('.mp4') || file.endsWith('.mov') || file.endsWith('.avi')
    );

    // Перекодируем каждое видео
    videoFiles.forEach(file => {
      const inputFilePath = path.join(inputDir, file);
      const outputFileName = `super_optimized_${file}`;
      const outputFilePath = path.join(outputDir, outputFileName);

      // Команда для ffmpeg
      const command = `ffmpeg -i "${inputFilePath}" -movflags +faststart "${outputFilePath}"`;

      // Выполняем команду
      exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error(`Ошибка при обработке файла ${file}:`, error);
          return;
        }
        console.log(`Успешно перекодировано: ${outputFileName}`);
      });
    });
  });
};

// Запускаем функцию
optimizeVideos();
