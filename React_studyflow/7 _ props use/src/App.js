import './App.css';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className="App">
      <PetInfo animal="dinosaur" age="65 million" />
      <PetInfo animal="pokemon" age={8} />
    </div>
  );
}

export default App;
