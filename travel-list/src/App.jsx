import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import Footer from "./components/Footer";
import PackingList from "./components/PackingList";

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

  const handleClearItems = () => {
    const confirmed = window.confirm("Are you sure to Clear List?");

    if (confirmed) setItems([]);
  };
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;