import { createStore } from "redux";

const initialData = {
  products: [
    { pName: "Apple", price: 20 },
    { pName: "Banana", price: 3 },
    { pName: "Orange", price: 10 },
    { pName: "Grapes", price: 8 },
  ],
  cart: [],
  total: 0,
};

const reducer = (state = initialData, action) => {
  if (action.type === "PURCHASE") {
    return {
      ...state,
      cart: [...state.cart, action.payload],
      total: state.total + parseInt(action.payload.price)
    };
  }
  else if
  
    (action.type === "REMOVE") {
      return {
      ...state,
      cart: state.cart.filter((item)=>item.pName!==action.payload.pName),
      total: state.total - parseInt(action.payload.price)
    }
  }
  else if (action.type === "CLEAR") {
    return {
      ...state,
      cart: [],
      total: 0
    }
  }
};
const store = createStore(reducer);

export default store;
