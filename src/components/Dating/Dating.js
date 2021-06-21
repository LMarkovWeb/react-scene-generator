/**
 * React
 */
import React, { useContext, useEffect, useState } from "react";
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
import { getDialogsFromServer } from "../../services/dialogs";
/**
 * Context
 */
import { StoreContext } from "../../context/storeContext";
/**
 * styles
 */
import "./style.scss";

/**
 * Component Dating
 */
const Dating = () => {
  const { state } = useContext(StoreContext);
  const [isProgressLoaded, setProgress] = useState(false);

  const [dialogsData, setDialogsData] = useState([]); // для хранения массива диалогов из БД
  const [dialogState4Render, updateDialog4Render] = useState([]); // для вывода диалогов на страницу

  // Получения данных (с помощью getDialogsFromServer()) и обновления состояния компонента с помощью хука setDialogsData
  const getDialogs = async () => {
    const arrServerDialogs = await getDialogsFromServer(); // массив диалогов из базы
    setDialogsData(arrServerDialogs); // сохранение массива диалогов в state
  };
  // Получение диалогов вначале загрузки страницы
  useEffect(() => {
    getDialogs();
  }, []);
  //console.log("dialogsData = ", dialogsData);

  // Обновление блока с диалогами
  useEffect(() => {
    console.log("Обновление блока с диалогами");

    const interval = setInterval(() => {
      updateDialog4Render([]);
      console.log("dialogState4Render >>", dialogState4Render);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
