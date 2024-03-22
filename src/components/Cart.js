import { Button, Card } from "react-bootstrap";
import { UseSelector, useSelector } from "react-redux";

const Cart = () => {
  const products = useSelector((state) => state.cart);

  const cards = products.map((product) => (
    <div className="col-md-12" style={{ marginBottom: "10px" }}>
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
          <Button variant="danger">
            Remove Item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <div className="row">{cards}</div>
    </>
  );
};

export default Cart;
