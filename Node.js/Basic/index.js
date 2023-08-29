// модуль http отвечает за создание веб-серверов
const http = require('http');

// создание инстанса сервера (экземпляра класса Server)
const server = http.createServer((request, response) => {
  //метод end() у параметра ServerResponse завершает ответ сервера
  response.end('<h1>Hello Node.js</h1>');
});

// метод listen() запускает прослушку подключений к серверу
//первым параметром передает порт, а вторым - коллбэк
// с возвратом информации, которая будет написана при запуске сервера
server.listen(3000, () => {
  console.log('Server has been started...');
});
