import React, { useState } from "react";
import { Son } from "./Son";
import { useCallback } from "react";

export const Father = () => {
  const list = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);

  const increment = useCallback((num) => {
    setValor(valor + num);
  }, []);

  return (
    <div>
      <h1> Father </h1>
      <p> Total: {valor} </p>
      <hr />

      {list.map((n, idx) => {
        return <Son key={idx} numero={n} increment={increment} />;
      })}
    </div>
  );
};