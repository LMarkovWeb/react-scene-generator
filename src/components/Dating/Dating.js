/**
 * React
 */
import React, { useContext, useState } from "react";
/**
 * Components
 */
import Linear from "../Linear/Linear";
import { Head } from "../Head/Head";
import { Body } from "../Body/Body";
import { Legs } from "../Legs/Legs";
/**
 * Data
 */
import { arBodiesItemsMan, arHeadsItemsMan, arLegsItemsMan } from "../../data";
/**
 * Services
 */
import { getLocSt } from "../../services/localstorage";
/**
 * Context
 */
import { StoreContext } from "../../context/storeContext";
/**
 * styles
 */
import "./style.scss";

const dialogs = {
  1: {
    1: "Привет, я горячий сексхазбент",
    2: "&#128513; &#128513; ахах) это кто? аха сексхазбент - это зачет)",
    3: "У меня есть интересная книжка, хочешь почитать?",
    4: "Что за книжка? Познавательная?",
    5: "Конечно! Хочешь почитаю тебе на ночь?",
    6: "Ну раз познавательная, то это всегда актуально",
    7: "У меня, вообще, замечательная библиотека, могу как нибуть показать &#128521;",
  },
  2: {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
  },
};

const Dating = () => {
  const { state } = useContext(StoreContext);
  const [isProgressLoaded, setProgress] = useState(false);
  //console.log("Файл Dating.js, state >> ", state);

  return (
    <div className="Dating">
      <div className="Dating__linear">
        {!isProgressLoaded && <Linear onFinished={() => setProgress(true)} />}
      </div>
      {isProgressLoaded && (
        <div className="Dating__Actor--left">
          {state.head && (
            <Head fillColor={state.skinColor} svgCode={state.head.preview} />
          )}
          {state.body && (
            <Body fillColor={state.skinColor} svgCode={state.body.preview} />
          )}
          {state.legs && (
            <Legs fillColor={state.skinColor} svgCode={state.legs.preview} />
          )}
        </div>
      )}
      <div className="Dating__Dialog"></div>
      <div className="Dating__Actor--right">
        <Head />
      </div>
    </div>
  );
};

export { Dating };
