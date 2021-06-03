import React, {useContext, useState, useReducer} from "react";
import "./style.scss";
import Linear from "../Linear/Linear";
import {StoreContext} from "../../context/storeContext";
import {Head} from "../Head/Head";

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
    const {state, dispatch} = useContext(StoreContext)

    return (
        <div className="Dating">
            <Linear/>

            {state.head && <Head svgCode={state.head.preview}/>}

            <div className="Actor--left"></div>
            <div className="Dialog"></div>
            <div className="Actor--right"></div>
        </div>
    );
};

export {Dating};
