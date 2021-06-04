/**
 * React
 */
import React, { useContext, useEffect, useState } from "react";
/**
 * Components
 */
import { SelectGender } from "../SelectGender/SelectGender";
import { List } from "../List/List";
import { ColorPicker } from "../ColorPicker/ColorPicker";
import { Head } from "../Head/Head";
import { Body } from "../Body/Body";
import { Legs } from "../Legs/Legs";
import Nav from "../Nav";

/**
 * Data
 */
import {
  arBodiesItemsGirl,
  arBodiesItemsMan,
  arHeadsItemsGirl,
  arHeadsItemsMan,
  arLegsItemsGirl,
  arLegsItemsMan,
} from "../../data";

/**
 * Context
 */
import { ACTION, StoreContext } from "../../context/storeContext";

const SceneGenerator = ({}) => {
  const { state, dispatch } = useContext(StoreContext);

  // set default gender
  let genderDefault = "man";
  let genderFromLocSt = localStorage.getItem("genderDefault");
  if (genderFromLocSt) {
    genderDefault = genderFromLocSt;
  }

  const [head, setHead] = useState(false);
  const [body, setBody] = useState(false);
  const [legs, setLegs] = useState(false);
  const [skinColor, setSkinColor] = useState("#FFDFC4");
  const [gender, setGender] = useState(genderDefault);

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

  // ??? @see https://coderoad.ru/40256673/getElementById-%D0%B2-React
  // const btn = document.getElementById("doNothing");
  // console.log(btn);

  const updateHead = (newData) => {
    setHead(newData);
    dispatch({ action: ACTION.UPDATE_HEAD, data: newData });
  };

  return (
    <div className="App">
      <SelectGender gender={gender} onItemSelect={setGender} />

      <aside className="App__aside--left">
        <h1>
          {gender === "man"
            ? "Создай свою идеальную девушку"
            : "Создай своего идеального парня"}
        </h1>
        <List
          list={currentListHead}
          title="Голова и прическа"
          isShow
          onItemSelect={updateHead}
          genderType={gender}
        />
        <ColorPicker
          title="Цвет кожи"
          isShow
          onSkinColorSelect={setSkinColor}
        />
      </aside>
      <div className="App__mannequin">
        {head && <Head fillColor={skinColor} svgCode={state.head.preview} />}
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
        <Nav />
      </aside>
    </div>
  );
};

export { SceneGenerator };
