import { useState } from "react";
import "./reset.css";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="mainpage-container">
      <h1 className="title">Selamlar</h1>
    </div>
  );
}

export default App;
