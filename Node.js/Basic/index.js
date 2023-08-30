// модуль http отвечает за создание веб-серверов
const http = require('http');

const fs = require('fs');
const path = require('path');

// создание инстанса сервера (экземпляра класса Server)
const server = http.createServer((request, response) => {
  // определение адреса, по которому приходит запрос
  console.log(request.url);

  if (request.url === '/') {
    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
      if (err) throw err;

      //прямое указание статуса ответа в Header'е
      // первый параметр - статус код, второй параметр - объект headers
      response.writeHead(200, {
        'Content-Type': 'text/html',
      });

      //метод end() у параметра ServerResponse завершает ответ сервера
      // и возвращает данные, переданные в качестве параметра
      response.end(data);
    });
  } else if (request.url === '/contacts') {
    fs.readFile(
      path.join(__dirname, 'public', 'contacts.html'),
      (err, data) => {
        if (err) {
          throw err;
        }

        response.writeHead(200, {
          'Content-Type': 'text/html',
        });

        response.end(data);
      }
    );
  }
});

// метод listen() запускает прослушку подключений к серверу
//первым параметром передает порт, а вторым - коллбэк
// с возвратом информации, которая будет написана при запуске сервера
server.listen(3000, () => {
  console.log('Server has been started...');
});
