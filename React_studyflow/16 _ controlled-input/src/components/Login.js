import { useState } from 'react';

function Login() {
  const [data, setData] = useState({ username: '', password: '' });

  function handleFormSubmit(event) {
    event.preventDefault();

    console.log(data);
    alert(JSON.stringify(data));
  }

  // 2 варианта обработчиков события onChange для инпутов

  // 1) при вызове обработчика необходимо передавать ее аргументы:
  // 1ый - введенный текст, 2ой - вручную писать название изменяемого поля
  function handleInputChange(text, inputName) {
    setData({ ...data, [inputName]: text });
  }

  // 2) более универсальная функция, куда автоматом прилетает event, но в самом input'e необходим аттрибут name
  function handlePassSurpass(event) {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={data.username}
            onChange={(e) => handleInputChange(e.target.value, 'username')}
            name="username" // для текущего обработчика поле name не требуется и может быть опущено
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={data.password}
            onChange={handlePassSurpass}
            name="password" // здесь же поле name обязательно, поскольку по нему определяется имя свойства в объекте data
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
