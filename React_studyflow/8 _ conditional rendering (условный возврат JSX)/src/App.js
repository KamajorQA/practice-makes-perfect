import './App.css';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className="App">
      <PetInfo animal="dinosaur" age="65 million" hasPet={true} />
      <PetInfo animal="pokemon" age={8} hasPet="" />
      <PetInfo animal="dog" age={10} hasPet={false} />
      <PetInfo animal="dragon" age={0.5} hasPet />
    </div>
  );
}

export default App;
