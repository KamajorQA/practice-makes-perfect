const path = require('path');

console.log('Название файла: ', path.basename(__filename));

console.log('Имя директории: ', path.dirname(__filename));

console.log('Расширение файла: ', path.extname(__filename));

console.log(
  'Объект с полями root, dir, base, ext, name. Parse: ',
  path.parse(__filename)
);

console.log(
  'Сформированной абсолютный путь из набора строк: ',
  path.join(__dirname, 'sever', 'index.html')
);
