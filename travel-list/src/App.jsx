import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((prevItems) => [item, ...prevItems]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Footer />
    </div>
  );
}

export default App;

const Logo = () => {
  return <h1>🌴 Far Away 💼</h1>;
};

const Form = ({ onAddItem }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(5);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    const newItem = { id: Date.now(), description, quantity, packed: false };

    onAddItem(newItem);
    setDescription("");
    setQuantity(1);
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for 🧳 packing?</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num}>{num}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Add Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

const PackingList = ({ items, onDeleteItem, onToggleItem }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
};

const Item = ({ item, onDeleteItem, onToggleItem }) => {
  return (
    <li style={item.packed ? { textDecoration: "line-through" } : {}}>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          onToggleItem(item.id);
        }}
      />
      <span>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};

const Footer = () => {
  return (
    <footer className="stats">
      <p>💼 You have X Items In your list and X Items Pakced (%X)</p>
    </footer>
  );
};
