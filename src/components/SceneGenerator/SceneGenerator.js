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
import { Nav } from "../Nav/nav";
/**
 * Services
 */
import { getLocSt } from "../../services/localstorage";
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
import {
  ACTION,
  StoreContext,
  DEFAULT_SKIN_COLOR,
} from "../../context/storeContext";
/**
 * styles
 */
import "./style.scss";

/**
 * SceneGenerator
 */
const SceneGenerator = () => {
  // set default gender
  let genderDefault = getLocSt("genderDefault") || "man";

  /* CONTEXT */
  // @ see https://ru.reactjs.org/docs/hooks-reference.html#usecontext
  const { state, dispatch } = useContext(StoreContext);
  //console.log("файл SceneGenerator.js, состояние state = ", state);

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

  const updateHead = (newData) => {
    // console.log("Файл scenegenerator.js, updateHead, newData = ", newData);
    setHead(newData);
    dispatch({ action: ACTION.UPDATE_HEAD, data: newData });
  };
  const updateBody = (newData) => {
    // console.log("Файл scenegenerator.js, updateHead, newData = ", newData);
    setBody(newData);
    dispatch({ action: ACTION.UPDATE_BODY, data: newData });
  };
  const updateLegs = (newData) => {
    //console.log("updateBody newData = ", newData);
    setLegs(newData);
    dispatch({ action: ACTION.UPDATE_LEGS, data: newData });
  };

  const updateColor = (newData) => {
    setSkinColor(newData);
    dispatch({ action: ACTION.UPDATE_COLOR, data: newData });
  };

  // установка пиктограм в зависимости от пола
  let currentListHead = gender === "woman" ? arHeadsItemsMan : arHeadsItemsGirl;
  let currentListBody =
    gender === "woman" ? arBodiesItemsMan : arBodiesItemsGirl;
  let currentListLegs = gender === "woman" ? arLegsItemsMan : arLegsItemsGirl;

  return (
    <div className="SceneGenerator">
      <div className="SceneGenerator__title">
        <h1>
          {gender === "man"
            ? "Создай свою идеальную девушку"
            : "Создай своего идеального парня"}
        </h1>
      </div>
      <div className="SceneGenerator__selectGender">
        <SelectGender gender={gender} onItemSelect={setGender} />
      </div>
      <aside className="SceneGenerator__aside--left">
        <List
          list={currentListHead}
          title="Голова и прическа"
          isShow
          onItemSelect={updateHead}
          genderType={gender}
        />
        <ColorPicker title="Цвет кожи" isShow onSkinColorSelect={updateColor} />
      </aside>
      <div className="SceneGenerator__mannequin">
        <div className="Mannequin">
          {head && <Head fillColor={skinColor} svgCode={state.head.preview} />}
          {body && <Body fillColor={skinColor} svgCode={state.body.preview} />}
          {legs && <Legs fillColor={skinColor} svgCode={state.legs.preview} />}
          <div className="Mannequin__bgrd"></div>
        </div>
      </div>
      <aside className="SceneGenerator__aside--rigth">
        <List
          list={currentListBody}
          title="Тело и верхняя одежда"
          isShow
          onItemSelect={updateBody}
        />
        <List
          list={currentListLegs}
          title="Ноги"
          isShow
          onItemSelect={updateLegs}
        />
      </aside>
      <div className="SceneGenerator__nav">
        <Nav />
      </div>
    </div>
  );
};

export { SceneGenerator };
