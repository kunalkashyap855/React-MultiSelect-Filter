import React, { useState } from "react";

// components
import Filters from "./components/Filters";
import Products from "./components/Products";

import styles from "./App.module.css";

import data from "./dummyData";

export default function App() {
  const [products, setProducts] = useState(data);

  const [search, setSearch] = useState("");
  const [price, setPrice] = useState([0, 2000]);
  const [category, setCategory] = useState("");
  const [color, setColor] = useState({
    blue: false,
    red: false,
    yellow: false,
    white: false,
    black: false,
    green: false,
    grey: false,
    orange: false
  });
  const [colorArray, setColorArray] = useState([]);

  const handleSearch = e => {
    setSearch(e.target.value);
  };

  const handleCategory = e => {
    setCategory(e.target.value);
  };

  const handleColor = e => {
    setTimeout(console.log(colorArray), 5000);

    if (e.target.checked) {
      setColorArray([...colorArray, e.target.value]);
    } else {
      colorArray.splice(colorArray.indexOf(e.target.value), 1);
    }

    setColor({ ...color, [e.target.name]: e.target.checked });
  };

  const handlePrice = (event, newValue) => {
    setPrice(newValue);
  };

  const filteredProducts = products.filter(
    item =>
      item.name.toLowerCase().includes(search) &&
      item.category.includes(category) &&
      item.price > price[0] &&
      item.price < price[1]
  );

  return (
    <div className={styles.container}>
      <Filters
        search={search}
        price={price}
        category={category}
        color={color}
        handleSearch={handleSearch}
        handlePrice={handlePrice}
        handleCategory={handleCategory}
        handleColor={handleColor}
      />
      <Products data={filteredProducts} />
    </div>
  );
}
