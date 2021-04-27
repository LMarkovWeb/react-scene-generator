import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import girlHead_1 from "../src/components/Head/img/Girl-Head-1.svg";
import girlHead_2 from "../src/components/Head/img/Girl-Head-2.svg";
import { List } from "./components/List/List";
import { Head } from "./components/Head/Head";

const heads = [
  {
    title: "Girl / Head / 1",
    preview: girlHead_1,
  },
  {
    title: "Girl / Head / 2",
    preview: girlHead_2,
  },
];

const App = () => {
  const [head, setHead] = useState(undefined);
  console.log("head :>> ", head);
  return (
    <div>
      <List list={heads} title="Heads" onItemSelect={setHead} />

      {head && <Head headPreview={head.preview} />}
    </div>
  );
};

// ========================================

ReactDOM.render(<App />, document.getElementById("root"));
