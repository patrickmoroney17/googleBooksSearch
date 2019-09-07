import React from "react";
import Nav from "./components/Nav";
import Books from "./pages/Books";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const App = () => {
  return (
    <Router>
        <h1>Hello Dog</h1>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Books} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;