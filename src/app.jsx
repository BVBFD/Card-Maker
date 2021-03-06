import Login from "./components/login/login";
import React from "react";
import styles from "./app.module.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Maker from "./components/maker/maker";

const App = ({ FileInput, authService, cardRepository }) => {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Login authService={authService} />
          </Route>
          <Route path="/maker">
            <Maker
              cardRepository={cardRepository}
              FileInput={FileInput}
              authService={authService}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
