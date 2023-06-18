const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 2, description: "Pants", quantity: 2, packed: true },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Footer />
    </div>
  );
}

export default App;

const Logo = () => {
  return <h1>🌴 Far Away 💼</h1>;
};

const Form = () => {
 const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for 🧳 packing?</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num}>{num}</option>
        ))}
      </select>
      <input type="text" placeholder="Add Item..." />
      <button>Add</button>
    </form>
  );
};

const PackingList = () => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

const Item = ({ item }) => {
  return (
    <li style={item.packed ? { textDecoration: "line-through" } : {}}>
      <span>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
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
