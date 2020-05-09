import React, { Fragment } from "react";

import ProductCard from "./ProductCard";

import styles from "./Products.module.css";

const Products = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map(item => (
        <ProductCard item={item} />
      ))}
    </div>
  );
};

export default Products;
