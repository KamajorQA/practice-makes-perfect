function Button({ onClick, buttonText = 'lick me' }) {
  return <button onClick={onClick}>{buttonText}</button>;
}

export default Button;
