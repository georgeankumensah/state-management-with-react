import React from 'react'
import { useSelector } from 'react-redux';

const Purchase = () => {
    const products = useSelector((state)=>state.products)
  return (
    <div className="w-[200px] h-[200px] border-2 py-2">
      <h3>Purchase Component</h3>
      <hr />
      <select onChange={handleProdChange}>
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
}

export default Purchase