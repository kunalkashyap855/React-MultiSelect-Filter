import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText
} from "@material-ui/core";

const Category = ({ category, handleCategory }) => {
  return (
    <FormControl>
      <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={category}
        onChange={handleCategory}
      >
        <MenuItem value="">
          <em>Category</em>
        </MenuItem>
        <MenuItem value="Upperwear">Upperwear</MenuItem>
        <MenuItem value="Lowerwear">Lowerwear</MenuItem>
        <MenuItem value="Footwear">Footwear</MenuItem>
      </Select>
      <FormHelperText>Filter by Category</FormHelperText>
    </FormControl>
  );
};

export default Category;
