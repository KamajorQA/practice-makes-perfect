const App = () => {
  console.log('called');
  let buttonText = 'Click me';
  const handlerButton = () => {
    buttonText =
      'Переменную можно изменить, но для изменения компонентов ее использующих нужен их ререндеринг';
    alert(buttonText);
  };
  return (
    <div className="app">
      <button onClick={handlerButton}>{buttonText}</button>
    </div>
  );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App />);
