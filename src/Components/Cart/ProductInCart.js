import React from "react";
import { Button } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import "./ProductinCart.css";

const ProductInCart = ({
  id,
  title,
  category,
  url,
  price,
  addFunc,
  deleteFunc,
  units
}) => {
  return (
    <tr>
      <td>
        {title} <img className="selecteProducts" src={url} />{" "}
      </td>
      <td>
        <div className="input-group">
          <span className="input-group-btn">
            <Button
              onClick={() =>
                deleteFunc({ id, title, category, url, price, units: 1 })
              }
              variant="danger"
              size="sm"
            >
              -
            </Button>
          </span>
          <label>{units}</label>
          <span className="input-group-btn">
            <Button
              onClick={() =>
                addFunc({ id, title, category, url, price, units: 1 })
              }
              variant="success"
              size="sm"
            >
              +
            </Button>
          </span>
        </div>
      </td>
      <td>{price} €</td>
    </tr>
  );
};

export default ProductInCart;
