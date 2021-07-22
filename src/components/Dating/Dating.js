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
  const [dialogState4Render, updateDialog4Render] = useState([]); // для вывода диалогов на страницу
  // Ф-ия для получения данных и обновления состояния
  const getDialogs = async () => {
    setDialogsData(await getDialogsFromServer());
  };

  //Получение диалогов вначале загрузки страницы
  useEffect(() => {
    getDialogs();
  }, []);

  useEffect(() => {
    if (
      Boolean(dialogsData.length) &&
      dialogsData.length !== dialogState4Render.length
    ) {
      const newDialogsForRender = [
        ...dialogState4Render,
        dialogsData[dialogState4Render.length],
      ];

      setTimeout(() => {
        updateDialog4Render(newDialogsForRender);
      }, 4000);
    }
  }, [dialogsData, dialogState4Render]);

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
        {isProgressLoaded &&
          Boolean(dialogState4Render.length) &&
          dialogState4Render.map((dialog, i) => {
            let gender = (i + 1) % 2 !== 0 ? "m" : "w";
            return (
              <>{!!dialog && <Dialog key={dialog} mes={dialog} g={gender} />}</>
            );
          })}
      </div>
      <div className="Dating__Actor--right">
        {isProgressLoaded && (
          <Head fillColor="#FFDFC4" svgCode={arHeadsItemsMan[0].preview} />
        )}
        {isProgressLoaded && (
          <Body fillColor="#FFDFC4" svgCode={arBodiesItemsMan[0].preview} />
        )}
        {isProgressLoaded && (
          <Legs fillColor="#FFDFC4" svgCode={arLegsItemsMan[0].preview} />
        )}
      </div>
    </div>
  );
};

export { Dating };
