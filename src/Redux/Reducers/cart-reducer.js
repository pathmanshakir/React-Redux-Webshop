import { ADD_TO_CART } from "../Actions/cart-actions";
import { DELETE_FROM_CART } from "../Actions/cart-actions";

const INITIAL_STATE = {
  products: [],
  totalAmount: 0
};

export default function cartReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case ADD_TO_CART: {
      const newProduct = action.payload;
      const cartProducts = [...state.products];
      const amount = state.totalAmount;

      const totalAmount = amount + newProduct.price;
      // Check whether the product already exist in the cart
      const existingProductIndex = findProductIndex(
        cartProducts,
        newProduct.id
      );
      // If there any matching product is found, if found just update the units otherwise add the product to cart array
      const updatedCart =
        existingProductIndex >= 0
          ? updateProductUnits(cartProducts, newProduct, "ADD_TO_CART")
          : [...cartProducts, newProduct];

      return { ...state, products: updatedCart, totalAmount: totalAmount };
    }
    case DELETE_FROM_CART: {
      const newProduct = action.payload;
      const cartProducts = [...state.products];
      const amount = state.totalAmount;

      const totalAmount = amount - newProduct.price;
      const existingProductIndex = findProductIndex(
        cartProducts,
        newProduct.id
      );
      const updatedCart =
        existingProductIndex >= 0
          ? updateProductUnits(cartProducts, newProduct, "DELETE_FROM_CART")
          : [...cartProducts, newProduct];

      return { ...state, products: updatedCart, totalAmount: totalAmount };
    }
  }

  return state;
}

const findProductIndex = (cart, productID) => {
  return cart.findIndex(p => p.id === productID);
};

const updateProductUnits = (cart, product, action) => {
  const productIndex = findProductIndex(cart, product.id);
  // make a copy of the current cart so you won't get multiple products of the same type
  const updatedCart = [...cart];
  // Target the product already in the cart
  const existingProduct = updatedCart[productIndex];
  // Update just the units of the already existing product

  const addUnitsProduct = {
    ...existingProduct,
    units: existingProduct.units + product.units
  };

  const deleteUnitsProduct = {
    ...existingProduct,
    units: existingProduct.units - product.units
  };
  switch (action) {
    case "ADD_TO_CART": {
      updatedCart[productIndex] = addUnitsProduct;
      return updatedCart;
    }
    case "DELETE_FROM_CART": {
      if (updatedCart[productIndex].units === 1) {
        return updatedCart.filter(
          item => item.id !== updatedCart[productIndex].id
        );
      }
      updatedCart[productIndex] = deleteUnitsProduct;
      return updatedCart;
    }
  }
};
