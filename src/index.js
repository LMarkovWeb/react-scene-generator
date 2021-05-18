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
import { ReactComponent as GirlHead1 } from "../src/components/Head/img/Girl-Head-1.svg";
import { ReactComponent as GirlHead2 } from "../src/components/Head/img/Girl-Head-2.svg";
import { ReactComponent as GirlHead3 } from "../src/components/Head/img/Girl-Head-3.svg";
import { ReactComponent as GirlHead4 } from "../src/components/Head/img/Girl-Head-4.svg";
import { ReactComponent as GirlHead5 } from "../src/components/Head/img/Girl-Head-5.svg";
import { ReactComponent as GirlHead6 } from "../src/components/Head/img/Girl-Head-6.svg";
import { ReactComponent as GirlHead7 } from "../src/components/Head/img/Girl-Head-7.svg";
import { ReactComponent as GirlHead8 } from "../src/components/Head/img/Girl-Head-8.svg";

import { ReactComponent as GirlBody_1 } from "../src/components/Body/img/Girl-Body-1.svg";
import { ReactComponent as GirlBody_2 } from "../src/components/Body/img/Girl-Body-2.svg";
import { ReactComponent as GirlBody_3 } from "../src/components/Body/img/Girl-Body-3.svg";
import { ReactComponent as GirlBody_4 } from "../src/components/Body/img/Girl-Body-4.svg";
import { ReactComponent as GirlBody_5 } from "../src/components/Body/img/Girl-Body-5.svg";
import { ReactComponent as GirlBody_6 } from "../src/components/Body/img/Girl-Body-6.svg";
import { ReactComponent as GirlBody_7 } from "../src/components/Body/img/Girl-Body-7.svg";
import { ReactComponent as GirlBody_8 } from "../src/components/Body/img/Girl-Body-8.svg";

import { ReactComponent as GirlLegs_1 } from "../src/components/Legs/img/Girl-Legs-1.svg";
import { ReactComponent as GirlLegs_2 } from "../src/components/Legs/img/Girl-Legs-2.svg";
import { ReactComponent as GirlLegs_4 } from "../src/components/Legs/img/Girl-Legs-4.svg";
import { ReactComponent as GirlLegs_5 } from "../src/components/Legs/img/Girl-Legs-5.svg";
import { ReactComponent as GirlLegs_6 } from "../src/components/Legs/img/Girl-Legs-6.svg";

import { ColorPicker } from "./components/ColorPicker/ColorPicker";

// List for Head
const arrHeadsItems = [
  {
    title: "Карэ",
    preview: <GirlHead1 />,
  },
  {
    title: "Карэ 2",
    preview: <GirlHead2 />,
  },
  {
    title: "Хвостик",
    preview: <GirlHead3 />,
  },
  {
    title: "Афро",
    preview: <GirlHead4 />,
  },
  {
    title: "Распущенные волосы",
    preview: <GirlHead5 />,
  },
  {
    title: "Удлиненное карэ",
    preview: <GirlHead6 />,
  },
  {
    title: "Голивудская волна",
    preview: <GirlHead7 />,
  },
  {
    title: "Хан",
    preview: <GirlHead8 />,
  },
];

// List for Body
const arBodiesItems = [
  {
    title: "Пальто",
    preview: <GirlBody_1 />,
  },
  {
    title: "Кофта",
    preview: <GirlBody_2 />,
  },
  {
    title: "Кофта",
    preview: <GirlBody_3 />,
  },
  {
    title: "Футболка",
    preview: <GirlBody_4 />,
  },
  {
    title: "Топик",
    preview: <GirlBody_5 />,
  },
  {
    title: "Кофта 3/4",
    preview: <GirlBody_6 />,
  },
  {
    title: "Кофта",
    preview: <GirlBody_7 />,
  },
  {
    title: "Футболка",
    preview: <GirlBody_8 />,
  },
];

// List for Legs
const arLegsItems = [
  {
    title: "Широкие штаны",
    preview: <GirlLegs_1 />,
  },
  {
    title: "Узкие штаны",
    preview: <GirlLegs_2 />,
  },
  {
    title: "Штаны",
    preview: <GirlLegs_4 />,
  },
  {
    title: "Юбка",
    preview: <GirlLegs_5 />,
  },
  {
    title: "Юбка",
    preview: <GirlLegs_6 />,
  },
];

/**
 * App
 */
const App = () => {
  const [head, setHead] = useState(false);
  const [body, setBody] = useState(false);
  const [legs, setLegs] = useState(false);
  const [skinColor, setSkinColor] = useState("#FFDFC4");

  // debugger;

  return (
    <div className="App">
      <aside className="App__aside">
        <h1>Создай свою идеальную девушку</h1>
        <List
          list={arrHeadsItems}
          title="Голова и прическа"
          isShow
          onItemSelect={setHead}
        />

        <ColorPicker
          title="Цвет кожи"
          isShow
          onSkinColorSelect={setSkinColor}
        />
      </aside>

      <div className="App__mannequin">
        {head && <Head fillColor={skinColor} svgCode={head.preview} />}

        {body && <Body fillColor={skinColor} svgCode={body.preview} />}
        {legs && <Legs fillColor={skinColor} svgCode={legs.preview} />}
      </div>

      <aside className="App__aside--rigth">
        <List
          list={arBodiesItems}
          title="Тело и верхняя одежда"
          isShow
          onItemSelect={setBody}
        />
        <List list={arLegsItems} title="Ноги" isShow onItemSelect={setLegs} />
      </aside>
    </div>
  );
};

// ========================================

ReactDOM.render(<App />, document.getElementById("root"));
