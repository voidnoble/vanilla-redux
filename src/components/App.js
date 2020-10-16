import React from "react";
import { Route, HashRouter as Router } from "react-router-dom";
import Home from "../routes/Home"
import Detail from "../routes/Detail"

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home}></Route>
      <Route path="/:id" component={Detail}></Route>
    </Router>
  );
}

export default App;