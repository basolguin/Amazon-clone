import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  //creamos un Listener que monitorea si alguien ha iniciado sesión
  //y quién lo hizo
  useEffect(() => {
    // Se ejecutará solo una vez cuando el componente App cargue...
    auth.onAuthStateChanged((authUser) => {
      console.log("EL USUARIO ES >>> ", authUser);

      if (authUser) {
        // el user ha iniciado sesión / el user ya estaba conectado

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // El user ha cerrado sesión
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

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
