import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./NavigationBar.css";
import { FaShoppingCart } from "react-icons/fa";

class NavigationBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/home">
            <Nav>
              <img
                className="img-responsive"
                src="https://hgcapital.com/wp-content/uploads/2019/03/aplan-logo-white.png"
                alt=""
                style={{ height: 70, float: "right", marginLeft: 10 }}
              />
            </Nav>
          </Navbar.Brand>

          <div className="navContainer">
            <Nav className="mx-3" activeKey="/home">
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav>
            <Nav className="mx-3">
              <Nav.Link href="/cart">
                Cart <FaShoppingCart />
              </Nav.Link>
            </Nav>
          </div>
        </Navbar>
      </div>
    );
  }
}
export default NavigationBar;
