import React from "react";
import { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";

function Test() {
  const dispatch = useDispatch();
  const { data: products } = useSelector((state) => state.products);

  useEffect(() => {
    // API call
    // dispatch an action for fetching products
    dispatch(getProducts());
   
  }, []);

  // eslint-disable-next-line no-restricted-globals
  if (status === "Loading") {
    return <p>loading...</p>;
  }

  const addToCart = (product) => {
    // Dispatch an 'add' action
    dispatch(add(product));
  };

  const cards = products.map((product) => (
    <div className="col-md-3" style={{ marginBottom: "10px" }}>
      <Card key={product.id} className="h-100 text-center">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px", paddingTop: "10px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text> INR: {product.price}</Card.Text>
          <Card.Text>
            <span style={{ fontWeight: "bold" }}>Category:</span>{" "}
            <span style={{ fontStyle: "oblique" }}>{product.category}</span>
          </Card.Text>
        </Card.Body>

        <Card.Footer style={{ background: "slate" }}>
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add to cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <>
      <h2>This is my Product Gallery.</h2>
      <div className="row">{cards}</div>
    </>
  );
}

export default Test;
