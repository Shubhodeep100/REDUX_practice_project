import React from "react";
import { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
function Test() {
  const [products, getProducts] = useState([]);

  useEffect(() => {
    // API call

    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => {
        getProducts(result);
      });
  }, []);

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
            <span style={{fontStyle:'oblique'}}>{product.category}</span>
          </Card.Text>
        </Card.Body>

        <Card.Footer style={{ background: "white" }}>
          <Button variant="primary">Add to cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <>
      <h1>This is my Product.</h1>
      <div className="row">{cards}</div>
    </>
  );
}

export default Test;
