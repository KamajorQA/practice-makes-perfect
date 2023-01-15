const App = ({ initialButtonText, initialButtonClasses }) => {
  const [buttonText, setButtonText] = React.useState(initialButtonText);
  const [buttonClasses, setButtonClasses] =
    React.useState(initialButtonClasses);
  const handlerButton = () => {
    setButtonText('Hello from React');
    setButtonClasses('orange-btn');
  };
  return (
    <div className="app">
      <button className={buttonClasses} onClick={handlerButton}>
        {buttonText}
      </button>
    </div>
  );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="Click me" initialButtonClasses="" />);
