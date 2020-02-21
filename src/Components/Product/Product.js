import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Product.css";

const Product = ({ id, title, category, url, price, addFunc }) => {
  return (
    <div className="cardContainer">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{category}</Card.Text>
          <h1>{price} €</h1>
          <Button
            onClick={() =>
              addFunc({ id, title, category, url, price, units: 1 })
            }
            variant="primary"
          >
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
