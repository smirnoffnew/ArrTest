import React, { useState, useEffect } from "react";
import axios from "axios";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useStyles } from "./styles";

export const Home = () => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");
  const classes = useStyles();
  useEffect(() => {
    axios.get("https://api.listnride.com/v2/rides/13037").then(({ data }) => {
      const filteredList = [];

      data.cluster.variations.forEach(item => {
        if (filteredList.find(item_ => item_.size === item.size) === undefined) {
          filteredList.push(item);
        } else {
          const existing = filteredList.find(item_ => item_.size === item.size);
          const existingIndex = filteredList.findIndex(item_ => item_.size === item.size);
          Array.isArray(existing.id)  ? existing.id = [...existing.id, item.id] : existing.id = [existing.id, item.id];
          filteredList.splice(existingIndex, 1, existing);
        }
      });

      setList(filteredList);
    });
  }, []);

  const renderItems = () => {
      console.log('list', list);
    return list.map(({ size, frame_size, id }) => (
      <MenuItem
        value={id}
        key={Math.random()}
      >{`${size} | ${frame_size}`}</MenuItem>
    ));
  };

  const handleChange = e => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  return list ? (
    <div className={classes.wrapper}>
      <FormControl>
        <InputLabel>Pick a size</InputLabel>
        <Select
          className={classes.select}
          value={value}
          onChange={handleChange}
        >
          {renderItems()}
        </Select>
      </FormControl>
    </div>
  ) : (
    <div />
  );
};
