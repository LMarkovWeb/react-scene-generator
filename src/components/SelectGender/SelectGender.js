/**
 * React
 */
import React from "react";
/**
 * style
 */
import "./style.scss";
/**
 * material-ui
 */
import { Select, MenuItem } from "@material-ui/core";

const SelectGender = ({ gender, onItemSelect }) => {
  const handleChange = (event) => {
    onItemSelect(event.target.value);
    localStorage.setItem("genderDefault", event.target.value);
  };
  return (
    <div className="App_selectGender">
      я
      <Select
        className="select"
        id="select_1"
        value={gender}
        onChange={handleChange}
      >
        <MenuItem value={"man"}>парень</MenuItem>
        <MenuItem value={"woman"}>девушка</MenuItem>
      </Select>
      ищу
      <Select
        className="select"
        id="select_2"
        value={gender}
        onChange={handleChange}
      >
        <MenuItem value={"man"}>девушку</MenuItem>
        <MenuItem value={"woman"}>парня</MenuItem>
      </Select>
    </div>
  );
};

export { SelectGender };
