import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import FavoriteMeal from "./components/FavoriteMeal";
import ListCourse from "./components/ListCourse";
import Planning from "./components/Planning";
import firebase from "./firebase/firebaseConfig";

function App() {
  //fetch la bdd entière
  const mealDb = firebase.database().ref("mealDb");

  return (
    <Router>
      <div className="App">
        <nav>
          <ul className="nav">
            <li className="nav__link">
              <Link to="/">
                <i className="nav__icon fas fa-home"></i>
              </Link>
            </li>
            <li className="nav__link">
              <Link to="/ListCourse">
                <i className="nav__icon fas fa-list-alt"></i>
              </Link>
            </li>
            <li className="nav__link">
              <Link to="/Planning">
                <i className="nav__icon fas fa-calendar-alt"></i>
              </Link>
            </li>
            <li className="nav__link">
              <Link to="/FavoriteMeal">
                <i className="nav__icon fas fa-heart"></i>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mainContainer">
          <Switch>
            <Route path="/ListCourse">
              <ListCourse mealDb={mealDb} />
            </Route>

            <Route path="/Planning">
              <Planning />
            </Route>

            <Route path="/FavoriteMeal">
              <FavoriteMeal />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
