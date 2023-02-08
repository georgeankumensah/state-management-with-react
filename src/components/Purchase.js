import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Purchase = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const purchaseHandler = (e) => {
    let pName = e.target.options[e.target.selectedIndex].text;
    let price = e.target.value;
    let obj = { pName, price };
    console.log(obj);
    dispatch({ type: "PURCHASE", payload: obj });
  };
  return (
    <div className="w-[200px] h-[200px] border-2 py-2">
      <h3>Purchase Component</h3>
      <hr />
      <select onChange={purchaseHandler}>
        {products.map((product, index) => {
          return (
            <option value={product.price} key={index}>
              {product.pName} - ${product.price}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Purchase;
