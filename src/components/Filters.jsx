import React from "react";
import { Typography, Card, CardContent } from "@material-ui/core";

// components
import Search from "./AllFilters/Search";
import Category from "./AllFilters/Category";
import Color from "./AllFilters/Color";
import Price from "./AllFilters/Price";

import styles from "./Filters.module.css";

const Filters = ({
  search,
  category,
  color,
  price,
  handleSearch,
  handlePrice,
  handleCategory,
  handleColor
}) => {
  return (
    <Card variant="outlined" className={styles.cardContainer}>
      <CardContent style={{ height: "100%" }}>
        <Typography variant="h5" color="primary" align="left">
          Filter
        </Typography>
        <div className={styles.filterContainer}>
          <Search
            className={styles.flexItem}
            search={search}
            handleSearch={handleSearch}
          />
          <Category
            className={styles.flexItem}
            category={category}
            handleCategory={handleCategory}
          />
          <Price
            className={styles.flexItem}
            price={price}
            handlePrice={handlePrice}
          />
          {/* <Color
            className={styles.flexItem}
            color={color}
            handleColor={handleColor}
          /> */}
        </div>
      </CardContent>
    </Card>
  );
};

export default Filters;
