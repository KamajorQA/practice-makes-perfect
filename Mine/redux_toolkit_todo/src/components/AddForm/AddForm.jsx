function AddForm({ text, handleInputText, handleAddItem }) {
  return (
    <label className="addForm">
      <input value={text} onChange={(e) => handleInputText(e.target.value)} />
      <button onClick={handleAddItem}>Add Todo</button>
    </label>
  );
}

export default AddForm;
