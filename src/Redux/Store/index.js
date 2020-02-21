import { createStore } from "redux";
import cartReducer from "../Reducers";

const store = createStore(cartReducer);

export default store;
