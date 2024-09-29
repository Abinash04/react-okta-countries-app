import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/layout/NavBar";
import Home from "./components/pages/Home";
import Countries from "./components/pages/Countries";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" exact={true} Component={Home} />
            <Route path="/country" exact={true} Component={Countries} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
