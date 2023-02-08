import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state)=>state.cart)
  return (
    <div className="w-[200px] h-[200px] border-2 py-2">
      <h3>Cart Component</h3>
      <hr />
      <ul>
        {cart.map((product, index) => {
          return <li key={index}>{product.pName} </li>;
        })}
      </ul>
    </div>
  );
};

export default Cart;
