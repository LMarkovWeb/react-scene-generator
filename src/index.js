/**
 * React
 */
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
import { Button } from "@material-ui/core";
import Dating from "./components/Dating/Dating";

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
  // set default gender
  let genderDefault = "man";
  let genderFromLocSt = localStorage.getItem("genderDefault");
  if (genderFromLocSt) {
    genderDefault = genderFromLocSt;
  }

  // const label = [1, 2, 3, 4, 5];
  // let _local = JSON.parse(localStorage.getItem("label") || "[]");
  // _local.push(label);
  // localStorage.setItem("label", JSON.stringify(_local));

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

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/dating">
            <Dating />
          </Route>
          <Route path="/">
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
              <nav className="nav">
                <Link to="/dating">
                  <Button color="secondary">Пойти на свидание</Button>
                </Link>

                <Button id="doNothing">Ничего не делать</Button>
                {/* <Button href="#" disabled>
          Disabled
        </Button> */}
              </nav>
            </aside>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

// ========================================

ReactDOM.render(<App />, document.getElementById("root"));
