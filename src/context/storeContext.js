import React from "react";

export const ACTION = {
  UPDATE_HEAD: "UPDATE_HEAD",
  UPDATE_BODY: "UPDATE_BODY",
  UPDATE_LEGS: "UPDATE_LEGS",
  UPDATE_COLOR: "UPDATE_COLOR",
};

export const DEFAULT_SKIN_COLOR = "#FFDFC4";

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
  skinColor: DEFAULT_SKIN_COLOR,
};

// @see https://ru.reactjs.org/docs/context.html#reactcreatecontext
export const StoreContext = React.createContext(INITIAL_STORE);

const StoreProvider = StoreContext.Provider;
export { StoreProvider };
