import React from "react";
import { useSelector } from "react-redux";

const Total = () => {
  const total = useSelector((state)=>state.total)
  return (
    <div className="w-[200px] h-[200px] border-2 py-2">
      <h3>Total Component</h3>
      <hr />
      <h2>Total : {total}</h2>
    </div>
  );
};

export default Total;
