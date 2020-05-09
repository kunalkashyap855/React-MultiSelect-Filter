import React, { Fragment } from "react";
import { Slider, FormLabel } from "@material-ui/core";

const PriceRange = ({ price, handlePrice }) => {
  return (
    <div>
      <FormLabel component="legend">Filter by Price</FormLabel>
      <Slider
        value={price}
        onChange={handlePrice}
        min={0}
        max={2000}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        style={{ width: "210px" }}
      />
    </div>
  );
};

export default PriceRange;
