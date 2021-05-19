/**
 * React
 */
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

/**
 * Components
 */
import { List } from "./components/List/List";
import { Head } from "./components/Head/Head";
import { Legs } from "./components/Legs/Legs";
import { Body } from "./components/Body/Body";
import { SelectGender } from "./components/SelectGender/SelectGender";
import { ColorPicker } from "./components/ColorPicker/ColorPicker";
import {
  arHeadsItemsGirl,
  arHeadsItemsMan,
  arBodiesItemsGirl,
  arBodiesItemsMan,
  arLegsItemsGirl,
  arLegsItemsMan,
} from "./data";

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
  const [head, setHead] = useState(false);
  const [body, setBody] = useState(false);
  const [legs, setLegs] = useState(false);
  const [skinColor, setSkinColor] = useState("#FFDFC4");
  const [gender, setGender] = useState("man");

  useEffect(() => {
    setHead(false);
    setBody(false);
    setLegs(false);
  }, [gender]);

  // debugger;

  let currentListHead = gender === "woman" ? arHeadsItemsMan : arHeadsItemsGirl;
  let currentListBody =
    gender === "woman" ? arBodiesItemsMan : arBodiesItemsGirl;
  let currentListLegs = gender === "woman" ? arLegsItemsMan : arLegsItemsGirl;

  return (
    <div className="App">
      <div className="App_selectGender">
        <SelectGender gender={gender} onItemSelect={setGender} />
      </div>
      <aside className="App__aside">
        <h1>
          {gender === "man"
            ? "Создай свою идеальную девушку"
            : "Создай своего идеального парня"}
        </h1>
        <List
          list={currentListHead}
          title="Голова и прическа"
          isShow
          onItemSelect={setHead}
          genderType={gender}
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
          list={currentListBody}
          title="Тело и верхняя одежда"
          isShow
          onItemSelect={setBody}
        />
        <List
          list={currentListLegs}
          title="Ноги"
          isShow
          onItemSelect={setLegs}
        />
      </aside>
    </div>
  );
};

// ========================================

ReactDOM.render(<App />, document.getElementById("root"));
