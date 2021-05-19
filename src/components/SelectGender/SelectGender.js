/**
 * React
 */
import React, { useState } from "react";
/**
 * style
 */
import "./style.scss";
/**
 * material-ui
 */
import { Select, MenuItem } from "@material-ui/core";

const SelectGender = () => {
  const [gender, setGender] = useState(10);
  const handleChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <>
      я
      <Select id="select_1" value={gender} onChange={handleChange}>
        <MenuItem value={10}>парень</MenuItem>
        <MenuItem value={20}>девушка</MenuItem>
      </Select>
      ищу
      <Select id="select_2" value={gender} onChange={handleChange}>
        <MenuItem value={10}>девушку</MenuItem>
        <MenuItem value={20}>парня</MenuItem>
      </Select>
    </>
  );
};

export { SelectGender };
