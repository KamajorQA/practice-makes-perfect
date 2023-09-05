// модуль http отвечает за создание веб-серверов
const http = require('http');

const fs = require('fs');
const path = require('path');

// создание инстанса сервера (экземпляра класса Server)
const server = http.createServer((request, response) => {
  // определение адреса, по которому приходит запрос
  console.log(request.url);

  // создаем универсальный путь до файла
  // используя тернарный оператор по полученному запросу
  let filePath = path.join(
    __dirname,
    'public',
    request.url === '/' ? 'index.html' : request.url
  );

  // получаем расширение файла, расположенного по адресу текущей строки запроса
  const ext = path.extname(filePath);

  // Content-Type задаваемый по-умолчанию
  let contentType = 'text/html';

  // проверка типа возвращаемого контента на основе расширения полученного по адресу запроса файла
  // на основании чего меняется Content-Type, который передается затем с Headers ответа от сервера
  switch (ext) {
    case '.css': {
      contentType = 'text/css';
      break;
    }
    case '.js': {
      contentType = 'text/javascript';
      break;
    }
    default: {
      contentType = 'text/html';
    }
  }

  // проверка наличия расширения у найденного файла и добавление расширения .html при его отсутствии
  if (!ext) {
    filePath += '.html';
  }

  fs.readFile(filePath, (error, content) => {
    if (!!error) {
      fs.readFile(
        path.join(__dirname, 'public', 'NotFound.html'),
        (err, errorPage) => {
          if (err) {
            response.writeHead(500);
            response.end('Server error');
          } else {
            response.writeHead(200, {
              'Content-Type': contentType,
            });
            response.end(errorPage);
          }
        }
      );
    } else {
      // указание заголовков ответа сервера
      // первый параметр - статус код, второй параметр - объект headers
      response.writeHead(200, {
        'Content-Type': contentType,
      });

      //метод end() у параметра ServerResponse завершает ответ сервера
      // и возвращает данные (страницу), переданные в качестве параметра
      response.end(content);
    }
  });
});

// проверка наличия у зпаущенного сервера открытого порта
// (через системную переменную PORT у объекта process.env)
// и задание его по-умолчанию при остутствии
const PORT = process.env.PORT || 3000;

// метод listen() запускает прослушку подключений к серверу
//первым параметром передает порт, а вторым - коллбэк
// с возвратом информации, которая будет написана при запуске сервера
server.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}...`);
});
