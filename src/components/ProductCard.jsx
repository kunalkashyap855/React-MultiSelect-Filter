import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

import styles from "./ProductCard.module.css";

const ProductCard = ({ item }) => {
  return (
    <Card className={styles.productCard} variant="outlined">
      <CardContent className={styles.content}>
        <Typography variant="h6" color="textPrimary" align="center">
          {item.name}
        </Typography>
        <Typography variant="subheading2" color="textPrimary">
          Rs. {item.price}
        </Typography>
        <div className={styles.footer}>
          <Typography
            variant="body"
            color="textSecondary"
            style={{ marginRight: "10px" }}
          >
            {item.category}
          </Typography>
          <Typography variant="body" color="textSecondary">
            {item.color}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
