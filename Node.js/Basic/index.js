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

  // проверка наличия расширения у найденного файла и лобавление расширения при его отсутствии
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
              'Content-Type': 'text/html',
            });
            response.end(errorPage);
          }
        }
      );
    } else {
      // указание заголовков ответа сервера
      // первый параметр - статус код, второй параметр - объект headers
      response.writeHead(200, {
        'Content-Type': 'text/html',
      });

      //метод end() у параметра ServerResponse завершает ответ сервера
      // и возвращает данные (страницу), переданные в качестве параметра
      response.end(content);
    }
  });
});

// метод listen() запускает прослушку подключений к серверу
//первым параметром передает порт, а вторым - коллбэк
// с возвратом информации, которая будет написана при запуске сервера
server.listen(3000, () => {
  console.log('Server has been started...');
});
