import "./reset.css";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import Anasayfa from "./components/Anasayfa";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          <Anasayfa />
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
