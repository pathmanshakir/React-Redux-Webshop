export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_FROM_CART = "Delete_From_CART";

export function addToCartAction({ id, title, category, url, price, units }) {
  return {
    type: ADD_TO_CART,
    payload: { id, title, category, url, price, units }
  };
}

export function deleteFromCartAction({
  id,
  title,
  category,
  url,
  price,
  units
}) {
  return {
    type: DELETE_FROM_CART,
    payload: { id, title, category, url, price, units }
  };
}
