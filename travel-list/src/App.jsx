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
  return (
    <div className="add-form">
      <h3>What do you need for 🧳 packing?</h3>
    </div>
  );
};

const PackingList = () => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
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
