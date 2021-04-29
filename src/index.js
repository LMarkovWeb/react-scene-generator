/**
 * React
 */
import React, { useState } from "react";
import ReactDOM from "react-dom";
/**
 * Components
 */
import { List } from "./components/List/List";
import { Head } from "./components/Head/Head";
import { Background } from "./components/Background/Background";
import { Legs } from "./components/Legs/Legs";

/**
 * styles
 */
import "./index.scss";
/**
 * svg
 */
import girlHead_1 from "../src/components/Head/img/Girl-Head-1.svg";
import girlHead_2 from "../src/components/Head/img/Girl-Head-2.svg";
import girlHead_3 from "../src/components/Head/img/Girl-Head-3.svg";
import girlHead_4 from "../src/components/Head/img/Girl-Head-4.svg";
import girlHead_5 from "../src/components/Head/img/Girl-Head-5.svg";
import girlHead_6 from "../src/components/Head/img/Girl-Head-6.svg";
import girlHead_7 from "../src/components/Head/img/Girl-Head-7.svg";
import girlHead_8 from "../src/components/Head/img/Girl-Head-8.svg";

import girlBody_1 from "../src/components/Body/img/Girl-Body-1.svg";
import girlBody_2 from "../src/components/Body/img/Girl-Body-2.svg";
import girlBody_3 from "../src/components/Body/img/Girl-Body-3.svg";
import girlBody_4 from "../src/components/Body/img/Girl-Body-4.svg";
import girlBody_5 from "../src/components/Body/img/Girl-Body-5.svg";
import girlBody_6 from "../src/components/Body/img/Girl-Body-6.svg";
import girlBody_7 from "../src/components/Body/img/Girl-Body-7.svg";
import girlBody_8 from "../src/components/Body/img/Girl-Body-8.svg";

import girlLegs_1 from "../src/components/Legs/img/Girl-Legs-1.svg";
import girlLegs_2 from "../src/components/Legs/img/Girl-Legs-2.svg";
import girlLegs_4 from "../src/components/Legs/img/Girl-Legs-4.svg";
import girlLegs_5 from "../src/components/Legs/img/Girl-Legs-5.svg";
import girlLegs_6 from "../src/components/Legs/img/Girl-Legs-6.svg";
import { Body } from "./components/Body/Body";

// List for Head
const arrHeadsItems = [
  {
    title: "Girl / Head / 1",
    preview: girlHead_1,
  },
  {
    title: "Girl / Head / 2",
    preview: girlHead_2,
  },
  {
    title: "Girl / Head / 3",
    preview: girlHead_3,
  },
  {
    title: "Girl / Head / 4",
    preview: girlHead_4,
  },
  {
    title: "Girl / Head / 5",
    preview: girlHead_5,
  },
  {
    title: "Girl / Head / 6",
    preview: girlHead_6,
  },
  {
    title: "Girl / Head / 7",
    preview: girlHead_7,
  },
  {
    title: "Girl / Head / 8",
    preview: girlHead_8,
  },
];

// List for Body
const arBodiesItems = [
  {
    title: "Girl / Body / 1",
    preview: girlBody_1,
  },
  {
    title: "Girl / Body / 2",
    preview: girlBody_2,
  },
  {
    title: "Girl / Body / 3",
    preview: girlBody_3,
  },
  {
    title: "Girl / Body / 4",
    preview: girlBody_4,
  },
  {
    title: "Girl / Body / 5",
    preview: girlBody_5,
  },
  {
    title: "Girl / Body / 6",
    preview: girlBody_6,
  },
  {
    title: "Girl / Body / 7",
    preview: girlBody_7,
  },
  {
    title: "Girl / Body / 8",
    preview: girlBody_8,
  },
];

// List for Legs
const arLegsItems = [
  {
    title: "Girl / Legs / 1",
    preview: girlLegs_1,
  },
  {
    title: "Girl / Legs / 2",
    preview: girlLegs_2,
  },
  {
    title: "Girl / Legs / 4",
    preview: girlLegs_4,
  },
  {
    title: "Girl / Legs / 5",
    preview: girlLegs_5,
  },
  {
    title: "Girl / Legs / 6",
    preview: girlLegs_6,
  },
];

/**
 * App
 */
const App = () => {
  const [head, setHead] = useState(arrHeadsItems[0]);
  const [body, setBody] = useState(arBodiesItems[0]);
  const [legs, setLegs] = useState(arLegsItems[0]);
  //console.log("head :>> ", head);

  return (
    <div className="App">
      {/* <Background /> */}
      <aside className="App__aside">
        <List
          list={arrHeadsItems}
          title="Heads"
          isShow
          onItemSelect={setHead}
        />
        <List list={arBodiesItems} title="Bodies" onItemSelect={setBody} />
        <List list={arLegsItems} title="Legs" onItemSelect={setLegs} />
      </aside>

      <div className="App__mannequin">
        {head && <Head headPreview={head.preview} />}
        {body && <Body bodyPreview={body.preview} />}
        {legs && <Legs legsPreview={legs.preview} />}
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<App />, document.getElementById("root"));
