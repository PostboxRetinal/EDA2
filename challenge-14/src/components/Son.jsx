import React from "react";
import { memo } from "react";

export const Son = memo(({ numero, increment }) => {
  console.log("Cargado Nuevamente...");
  return (
    <button
      className="btn btn-secondary mr-3"
      onClick={() => {
        increment(numero);
      }}
    >
      {numero}
    </button>
  );
});