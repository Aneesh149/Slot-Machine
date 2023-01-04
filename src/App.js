import "./App.css";
import SlotM from "./Components/SlotMachine";

function App() {
  return (
    <div className="App">
      <h1 className="heading_style">
        🎰 Welcome to <span style={{ fontWeight: "bold" }}>Slot Machine</span>
        🎰
      </h1>
      <div className="slotmachine">
        <SlotM x="😄" y="😸" z="😄" />
        <SlotM x="😄" y="😄" z="😄" />
        <SlotM x="7️⃣" y="7️⃣" z="7️⃣" />
        <SlotM x="🍌" y="🍎" z="🍅" />
      </div>
    </div>
  );
}

export default App;
