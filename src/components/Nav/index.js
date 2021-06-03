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

// const Nothing = () => {
//   return <Button id="doNothing">Ничего не делать &#128528;</Button>;
// };

export default () => {
  const [nothing, setNothing] = useState(false);

  return (
    <nav className="Nav">
      <Link to="/dating">
        <Button color="secondary">Пойти на свидание &#10084;</Button>
      </Link>
      <Button id="doNothing" onClick={() => setNothing(!nothing)}>
        Ничего не делать &#128528;
      </Button>
      {nothing && <div className="nothingDone">Сделано ничего!</div>}
    </nav>
  );
};
