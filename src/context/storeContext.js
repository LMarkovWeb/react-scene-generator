import React from "react";

export const ACTION = {
  UPDATE_HEAD: "UPDATE_HEAD",
  UPDATE_BODY: "UPDATE_BODY",
  UPDATE_LEGS: "UPDATE_LEGS",
  UPDATE_COLOR: "UPDATE_COLOR",
};

export const INITIAL_STORE = {
  head: {
    preview: "",
  },
  body: {
    preview: "",
  },
  legs: {
    preview: "",
  },
  skinColor: "",
};

// @see https://ru.reactjs.org/docs/context.html#reactcreatecontext
export const StoreContext = React.createContext(INITIAL_STORE);

export const { Provider, Consumer } = StoreContext;
