import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import RestoSearch from "./components/RestoSearch";
import RestoList from "./components/RestoList";
import RestoCreate from "./components/RestoCreate";
import RestoUpdate from "./components/RestoUpdate";
import RestoDetail from "./components/RestoDetail";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Protected from "./components/Protected";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/Logout" component={Logout} />

        <Protected exact path="/Update/:id" component={RestoUpdate} />
        <Protected exact path="/Detail" component={RestoDetail} />
        <Protected exact path="/Create" component={RestoCreate} />
        <Protected exact path="/Search" component={RestoSearch} />
        <Protected exact path="/list" component={RestoList} />
        <Protected exact path="/" component={Home} />

        <Route path="/Login" render={(props) => <Login {...props} />}></Route>
      </Router>
    </div>
  );
}

export default App;
