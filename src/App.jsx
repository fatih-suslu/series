import "./reset.css";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom/cjs/react-router-dom";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          <div className="mainpage-container">
            <div className="left-column"></div>
            <div className="center-column">
              <h1 className="title">Selamlar</h1>
            </div>
            <div className="right-column"></div>
          </div>
        </Route>
        <Route path="/details">
          <div className="details-container">
            <div className="details">
              <h2>Dizi detay</h2>
              <Link to="/">Anasayfaya Dön</Link>
            </div>
          </div>
        </Route>
      </Switch>
    </main>
  );
}

export default App;
