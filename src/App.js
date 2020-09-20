import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
  return (
    // Metodologia BEM
    <Router>
      <div className="app">
        {/* Switch como en java c# etc */}
        {/* Asegurarse de mantener la por defecto '/' al final */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          {/* esta es nuestra ruta por defecto, si se dirige a una ruta X 
          y esta no coincide con las especificadas nos devolverá por defecto '/' */}
          <Route path="/">
            <Header />
            {/* Cuando nos encontramos en la ruta '/', renderizar Home*/}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
