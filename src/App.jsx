import { useState } from "react";
import "./reset.css";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="mainpage-container">
      <div className="left-column"></div>
      <div className="center-column">
        <h1 className="title">Selamlar</h1>
      </div>
      <div className="right-column"></div>
    </div>
  );
}

export default App;
