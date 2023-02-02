import { useState } from "react";
import Cart from "./components/Cart";
import Total from "./components/Total";
import TotalContext from "./store/store";
import Purchase from "./components/Purchase";

function App() {
  const [cart, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  let handleProdChange = (e) => {
    let pName = e.target.options[e.target.selectedIndex].text;
    let price = e.target.value;
    let tCart = [...cart];
    let obj = { pName, price };
    let tPrice = parseInt(price);
    tPrice = total + tPrice;
    tCart.push(obj);

    setProducts(tCart);
    setTotal(tPrice);
  };

  return (
    <div className="flex w-full justify-center gap-x-[200px]">
      <Purchase />
      <TotalContext.Provider value={total}>
        <Cart />
        <Total />
      </TotalContext.Provider>
    </div>
  );
}

export default App;
