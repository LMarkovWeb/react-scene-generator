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
import { Dialog } from "../Dialog/Dialog";
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
  const [dialogState4Render, updateDialog4Render] = useState("444"); // для вывода диалогов на страницу

  // Ф-ия для получения данных и обновления состояния
  const getDialogs = async () => {
    setDialogsData(await getDialogsFromServer());
  };

  //Получение диалогов вначале загрузки страницы
  useEffect(() => {
    getDialogs();
  }, []);
  console.log("state dialogsData = ", dialogsData);

  const obj = dialogsData[0];
  for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }

  // Обновление блока с диалогами
  // useEffect(() => {
  //   //console.log("Обновление блока с диалогами");
  //   console.log("state dialogsData 2 = ", dialogsData[0]);

  //   let i = 0;
  //   const interval = setInterval(() => {
  //     updateDialog4Render(dialogsData[0][i]);
  //     i++;
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [dialogsData]);

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
      <div className="Dating__Dialog">
        {/*isProgressLoaded && <Dialog text={dialogState4Render} />*/}
        <Dialog message={dialogState4Render} direction="left" />
      </div>
      <div className="Dating__Actor--right">
        <Head />
      </div>
    </div>
  );
};

export { Dating };
