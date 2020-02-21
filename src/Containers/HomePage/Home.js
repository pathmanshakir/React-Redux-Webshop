import React from "react";
import Product from "../../Components/Product/Product";
import Cart from "../../Components/Cart/Cart";
import "./Home.css";
import { products } from "../../Data/DummyData";
import { productsCategory } from "../../Data/Categories";
import Select from "react-select";
import { map } from "rxjs/operators";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToCartAction } from "../../Redux/Actions/cart-actions";
import { deleteFromCartAction } from "../../Redux/Actions/cart-actions";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      categories: [],
      selectedCategory: "Filter products"
    };
  }
  handleChange = event => {
    if (event.value !== "All") {
      this.setState(
        { selectedCategory: event.value },
        this.showFilteredProducts
      );
    } else {
      this.showAllProducts();
    }
  };
  showFilteredProducts() {
    const filterItems = products.pipe(
      map(products =>
        products.filter(
          product => product.category === this.state.selectedCategory
        )
      )
    );
    filterItems.subscribe(products => {
      this.setState({
        items: products,
        isLoaded: true
      });
    });
  }

  showAllProducts() {
    this.getProducts = products.subscribe(products => {
      this.setState({
        items: products,
        isLoaded: true
      });
    });

    this.getProductsCategories = productsCategory.subscribe(categories => {
      this.setState({
        categories: categories
      });
    });
  }
  componentDidMount() {
    this.showAllProducts();
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
    this.filterSubscription.unsubscribe();
  }

  addToCart = product => {
    this.props.addToCartAction(product);
  };

  deleteFromCart = product => {
    this.props.deleteFromCartAction(product);
    console.log(this.props.cart);
  };

  render() {
    var { items, isLoaded, categories, selectedCategory, cart } = this.state;
    var { cart, total } = this.props;
    if (!isLoaded) {
      return <div>Loading....</div>;
    } else {
      return (
        <div className="mainContainer">
          <div className="col-md-12 w-25 mt-3 ml-3">
            <Select
              onChange={this.handleChange}
              value={{ label: selectedCategory }}
              placeholder="Select Category"
              options={categories}
            />
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-8">
                <div className="productsContainer">
                  {items.map(p => (
                    <Product key={p.id} {...p} addFunc={this.addToCart} />
                  ))}
                </div>
              </div>
              <div className="col-4">
                <Cart
                  cart={cart}
                  totalAmount={total}
                  addFunc={this.addToCart}
                  deleteFunc={this.deleteFromCart}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
const mapStateToProp = state => {
  return {
    cart: state.cart.products,
    total: state.cart.totalAmount
  };
};

const mapActionsToProps = dispatch => {
  return bindActionCreators(
    {
      addToCartAction,
      deleteFromCartAction
    },
    dispatch
  );
};
export default connect(mapStateToProp, mapActionsToProps)(Home);
