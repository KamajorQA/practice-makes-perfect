import { useState } from 'react';
import {
  useGetGoodsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
} from './redux';
import './App.css';

function App() {
  const [count, setCount] = useState('');
  const [newProduct, setNewProduct] = useState('');
  const { data = [], isLoading, isError } = useGetGoodsQuery(count);
  const [addProduct, { isSuccess }] = useAddProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  const handleAddProduct = async () => {
    if (newProduct) {
      await addProduct({ name: newProduct }).unwrap();
      setNewProduct('');
    }
  };

  const handleDeleteProduct = async (id) => {
    await deleteProduct(id).unwrap();
  };

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="app">
      <h1>Shopping list</h1>
      <div>
        <input
          type="text"
          value={newProduct}
          onChange={(e) => setNewProduct(e.target.value)}
        />
        <button onClick={handleAddProduct}>Add product</button>
      </div>
      <div>
        <select value={count} onChange={(e) => setCount(e.target.value)}>
          <option value="">all</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <ul>
        {data.map((product) => (
          <li key={product.id} onClick={() => handleDeleteProduct(product.id)}>
            {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
