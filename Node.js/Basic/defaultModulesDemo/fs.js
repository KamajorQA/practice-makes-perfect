// File System
const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'test'), (err) => {
  if (err) {
    // throw err;
    console.error(err);
  }

  console.log('Папка создана');
});

const filePath = path.join(__dirname, 'test', 'text.txt');

fs.writeFile(filePath, 'Hello NodeJS!', (err) => {
  if (err) {
    throw err;
  }

  console.log('Файл создан');
});

fs.writeFile(filePath, '\nHello once again NodeJS!', (err) => {
  if (err) {
    throw err;
  }

  console.log('Файл перезаписан');
});

fs.appendFile(filePath, '\nNew text info appended!', (err) => {
  if (err) {
    throw err;
  }

  console.log('Текст добавлен');
});

fs.readFile(filePath, (err, content) => {
  if (err) {
    throw err;
  }

  // content без декодирования возвращается в виде Buffer
  console.log('Content: ', content);

  // у экземпляра класса Buffer есть метод toString для приведения к строке;
  const data = Buffer.from(content).toString();

  console.log('Stringed data: ', data);
});

// Альтернативный способ декодирования при чтении файла
// вторым параментом в метод readFile
// сразу передается строка с названием кодировки
// и content в коллбэке сразу декодируется в указанном формате
fs.readFile(filePath, 'utf-8', (err, content) => {
  if (err) {
    throw err;
  }

  // content сразу декодирован в UTF-8
  console.log('\n', 'Content in UTF-8: ', content);
});
