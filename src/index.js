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
import { Body } from "./components/Body/Body";

/**
 * styles
 */
import "normalize.css";
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
import { ColorPicker } from "./components/ColorPicker/ColorPicker";

// List for Head
const arrHeadsItems = [
  {
    title: "Карэ",
    preview: girlHead_1,
  },
  {
    title: "Карэ",
    preview: girlHead_2,
  },
  {
    title: "Хвостик",
    preview: girlHead_3,
  },
  {
    title: "Афро",
    preview: girlHead_4,
  },
  {
    title: "Распущенные волосы",
    preview: girlHead_5,
  },
  {
    title: "Удлиненное карэ",
    preview: girlHead_6,
  },
  {
    title: "Голивудская волна",
    preview: girlHead_7,
  },
  {
    title: "Хан",
    preview: girlHead_8,
  },
];

// List for Body
const arBodiesItems = [
  {
    title: "Пальто",
    preview: girlBody_1,
  },
  {
    title: "Кофта",
    preview: girlBody_2,
  },
  {
    title: "Кофта",
    preview: girlBody_3,
  },
  {
    title: "Футболка",
    preview: girlBody_4,
  },
  {
    title: "Топик",
    preview: girlBody_5,
  },
  {
    title: "Кофта 3/4",
    preview: girlBody_6,
  },
  {
    title: "Кофта",
    preview: girlBody_7,
  },
  {
    title: "Футболка",
    preview: girlBody_8,
  },
];

// List for Legs
const arLegsItems = [
  {
    title: "Широкие штаны",
    preview: girlLegs_1,
  },
  {
    title: "Узкие штаны",
    preview: girlLegs_2,
  },
  {
    title: "Штаны",
    preview: girlLegs_4,
  },
  {
    title: "Юбка",
    preview: girlLegs_5,
  },
  {
    title: "Юбка",
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
      <aside className="App__aside">
        <h1>Create your ideal character</h1>
        <List
          list={arrHeadsItems}
          title="Прическа"
          isShow
          onItemSelect={setHead}
        />
        <List list={arBodiesItems} title="Тело" onItemSelect={setBody} />

        <ColorPicker title="Цвет кожи" isShow />
      </aside>

      <div className="App__mannequin">
        {head && <Head headPreview={head.preview} />}
        {body && <Body bodyPreview={body.preview} />}
        {legs && <Legs legsPreview={legs.preview} />}
      </div>

      <aside className="App__aside--rigth">
        <List list={arLegsItems} title="Ноги" isShow onItemSelect={setLegs} />
        <div className="intro">
          Edit your person any way you like by using ready elements and styles
          for your character. Use your creative to compose your ideal human.
        </div>

        {/* <Background /> */}
        <div className="Background">
          <div className="Background__title">
            <span>Обстановка</span>
          </div>
          <div className="Background__wrapper"></div>
        </div>
      </aside>
    </div>
  );
};

// ========================================

ReactDOM.render(<App />, document.getElementById("root"));
