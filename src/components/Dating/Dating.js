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
        if(Boolean(dialogsData.length) && dialogsData.length !== dialogState4Render.length) {
            const newDialogsForRender = [dialogsData[dialogState4Render.length], ...dialogState4Render]

            setTimeout(() => {
                updateDialog4Render(newDialogsForRender)
            }, 2000)
        }

    }, [dialogsData, dialogState4Render])

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
          {Boolean(dialogState4Render.length) && dialogState4Render.map((dialog) => {
              return (
                  <div>
                      {Boolean(dialog.length) && dialog.map((sentence) => <Dialog key={sentence} message={sentence} direction="left" />)}
                  </div>
              )
          })}
      </div>
      <div className="Dating__Actor--right">
        <Head />
      </div>
    </div>
  );
};

export { Dating };
