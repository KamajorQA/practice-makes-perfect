import './randomNumber.css';
import { useState } from 'react';
import generateRandomNum from '../utils/generateRandomNum';

function RandomNumber({ maxNum }) {
  const [randomNum, setRandomNum] = useState(generateRandomNum(maxNum));
  const changeRandomNumber = () => {
    setRandomNum(generateRandomNum(maxNum));
  };

  return (
    <div>
      <h1>{randomNum}</h1>
      <button type="button" onClick={changeRandomNumber}>
        Generate new random number
      </button>
    </div>
  );
}

export { RandomNumber };
