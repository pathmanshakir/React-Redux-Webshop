import React from "react";
import { Container, Table } from "react-bootstrap";
import "./Cart.css";
import ProductInCart from "./ProductInCart";

export default class Cart extends React.PureComponent {
  render() {
    const { cart, totalAmount, addFunc, deleteFunc } = this.props;
    return (
      <Container className="purchase-card">
        <Table responsive>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(item => (
              <ProductInCart
                {...item}
                key={item.id}
                addFunc={addFunc}
                deleteFunc={deleteFunc}
              />
            ))}
            <tr>
              <td></td>
              <td>Total Price</td>
              <td>
                <p className="totalPrice">{totalAmount} €</p>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }
}
