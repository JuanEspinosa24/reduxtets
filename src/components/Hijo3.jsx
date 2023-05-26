import React from "react";
import { useSelector } from "react-redux";
import { Hijo13 } from "./nietos/Hijo13";

export const Hijo3 = () => {
  const { fecha } = useSelector((state) => state.global);

  return (
    <div>
      <h1>Hijo3</h1>
      <h3>{fecha}</h3>
      <Hijo13 />
    </div>
  );
};
