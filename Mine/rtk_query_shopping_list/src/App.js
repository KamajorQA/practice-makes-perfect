import { useGetGoodsQuery } from './redux';
import './App.css';

function App() {
  const { data = [], isLoading, isError } = useGetGoodsQuery();

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="app">
      <h1>Shopping list</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
