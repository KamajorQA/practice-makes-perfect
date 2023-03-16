import Wrapper from './components/Wrapper';
import './App.css';

function App() {
  return (
    <div className="App">
      <Wrapper color="lightblue">
        <h2>wrapper inner text from child jsx</h2>
        <button>No action</button>
      </Wrapper>
      <Wrapper color="lightgreen">
        <h2>second wrapper</h2>
        <p>description</p>
        <input type="text" placeholder="Enter value" />
      </Wrapper>
    </div>
  );
}

export default App;
