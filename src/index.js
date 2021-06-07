/**
 * React
 */
import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/**
 * Context
 */
import { ACTION, INITIAL_STORE, Provider } from "./context/storeContext";

/**
 * Components
 */
import { SceneGenerator } from "./components/SceneGenerator/SceneGenerator";
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
    // console.log("currentState >> ", currentState);
    // console.log("payload.data >> ", payload.data);
    switch (payload.action) {
      case ACTION.UPDATE_HEAD:
        return {
          ...currentState,
          head: payload.data,
        };
      case ACTION.UPDATE_BODY:
        return {
          ...currentState,
          body: payload.data,
        };
      case ACTION.UPDATE_LEGS:
        return {
          ...currentState,
          legs: payload.data,
        };
      case ACTION.UPDATE_COLOR:
        return {
          ...currentState,
          skinColor: payload.data,
        };
    }
  };

  const [state, dispatch] = useReducer(reducer, INITIAL_STORE);
  //console.log("файл index.js, состояние state = ", state);

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
