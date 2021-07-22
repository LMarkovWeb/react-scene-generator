/**
 * React
 */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
/**
 * material-ui
 */
import { Button } from "@material-ui/core";
/**
 * style
 */
import "./style.scss";

const Nav = ({ gender }) => {
  const [nothing, setNothing] = useState(false);
  const [canDating, setDating] = useState(true);

  useEffect(() => {
    if (gender === "man") {
      setDating(true);
    } else {
      setDating(false);
    }
  }, [gender]);

  return (
    <nav className="Nav">
      {canDating && (
        <Link to="/dating">
          <Button color="secondary">Пойти на свидание &#10084;</Button>
        </Link>
      )}
      {!canDating && <Button disabled>Девушки сами не приглащают</Button>}
      <Button id="doNothing" onClick={() => setNothing(!nothing)}>
        Ничего не делать &#128528;
      </Button>
      {nothing && <div className="nothingDone">Сделано ничего!</div>}
    </nav>
  );
};

export { Nav };
