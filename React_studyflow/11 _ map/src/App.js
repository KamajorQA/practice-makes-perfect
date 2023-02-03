import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

const buttonTextData = [
  'Wake me up',
  "I can't wake up",
  'Save me',
  'Wake me up',
  'I can’t wake up',
  'Save me',
];

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    if (count > 5) {
      return setCount(0);
    }
    setCount(count + 1);
  };

  return (
    <div className="App">
      <Counter count={count} />
      {buttonTextData.map((text, index) => {
        return (
          <Button
            onClick={incrementCount}
            buttonText={text}
            key={`${text}+${index}`}
          />
        );
      })}
    </div>
  );
}

export default App;
