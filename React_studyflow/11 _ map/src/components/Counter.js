const refrenText = [
  'Bring Me to Life',
  'Wake me up inside',
  'Wake me up inside!!!',
  'Call my name and save me from the dark',
  'Bid my blood to run',
  'Before I come undone',
  'Save me from the nothing I’ve become ',
];

function Counter({ count }) {
  return <h1>{refrenText[count]}</h1>;
}

export default Counter;
