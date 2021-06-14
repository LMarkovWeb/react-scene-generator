/**
 * React
 */
import React, { useState } from "react";
import { Link } from "react-router-dom";
/**
 * material-ui
 */
import { Button } from "@material-ui/core";
/**
 * style
 */
import "./style.scss";
/**
 * Services
 */
import { getLocSt } from "../../services/localstorage";

// @todo: использовать useState или useEffect
let canDating = true;
if (getLocSt("genderDefault") == "woman") {
  canDating = false;
}

export default () => {
  const [nothing, setNothing] = useState(false);

  return (
    <nav className="Nav">
      <Link to="/dating">
        {canDating && (
          <Button color="secondary">Пойти на свидание &#10084;</Button>
        )}
      </Link>
      <Button id="doNothing" onClick={() => setNothing(!nothing)}>
        Ничего не делать &#128528;
      </Button>
      {nothing && <div className="nothingDone">Сделано ничего!</div>}
    </nav>
  );
};
