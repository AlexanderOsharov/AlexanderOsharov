const { exec } = require('child_process');
const fs = require('fs');

const directoryPath = './videos';

// Читаем файлы в директории
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.error(`Ошибка при чтении директории: ${err}`);
  }

  // Фильтруем только файлы .mp4
  const mp4Files = files.filter(file => file.endsWith('.mp4'));

  mp4Files.forEach(file => {
    const inputFilePath = `${directoryPath}/${file}`;
    const outputFilePath = `${directoryPath}/optimized_${file}`;

    // Команда ffmpeg
    const command = `ffmpeg -i "${inputFilePath}" -c copy -movflags +faststart "${outputFilePath}"`;

    // Выполнение команды
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Ошибка: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
      console.log(`Обработан файл: ${file}`);
    });
  });
});
