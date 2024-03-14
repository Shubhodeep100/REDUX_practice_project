import React from "react";
import { useState, useEffect } from "react";
function Test() {
  const [products, getProducts] = useState([]);

  useEffect(() => {
    // API call

    fetch("https://fakestoreapi.com/products")
      .then(data => data.json())
      .then(result => {
        getProducts(result);
      });
  },[]);

  return (
    <>
      <h1>This is my Product.</h1>
    </>
  );
}

export default Test;
