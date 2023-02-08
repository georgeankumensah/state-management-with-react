import Cart from "./components/Cart";
import Total from "./components/Total";
import Purchase from "./components/Purchase";

function App() {
  return (
    <div className="flex w-full justify-center gap-x-[200px]">
      <Purchase />
      <Cart />
      <Total />
    </div>
  );
}

export default App;
