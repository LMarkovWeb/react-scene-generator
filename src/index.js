/**
 * React
 */
import React, { useContext, useEffect, useReducer, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/**
 * Context
 */
import {
  ACTION,
  INITIAL_STORE,
  Provider,
  StoreContext,
} from "./context/storeContext";

/**
 * Components
 */
import { SceneGenerator } from "./components/SceneGenerator";
import { Dating } from "./components/Dating/Dating";

/**
 * styles
 */
import "normalize.css";
import "fontsource-roboto";
import "./index.scss";

/**
 * App
 */
const App = () => {
  const reducer = (currentState, payload) => {
    switch (payload.action) {
      case ACTION.UPDATE_HEAD:
        return {
          ...currentState,
          head: payload.data,
        };
    }
  };

  const [state, dispatch] = useReducer(reducer, INITIAL_STORE);

  return (
    <Provider value={{ state, dispatch }}>
      <Router>
        <Switch>
          <Route path="/dating">
            <Dating />
          </Route>
          <Route path="/">
            <SceneGenerator />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

// ========================================

ReactDOM.render(<App />, document.getElementById("root"));
