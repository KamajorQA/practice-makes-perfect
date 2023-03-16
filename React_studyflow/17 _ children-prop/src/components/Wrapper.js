function Wrapper(props) {
  const wrapperStyle = {
    backgroundColor: props.color,
    width: '15rem',
    padding: '1.5rem',
    margin: '1.5rem auto',
  };

  return <div style={wrapperStyle}>{props.children}</div>;
}

export default Wrapper;
