import React from "react";
import { useSelector } from "react-redux";
import { Hijo12 } from "./nietos/hijo12";

export const Hijo2 = () => {

    const {cantidad}=useSelector(state=>state.global)

  return (
    <div>
      <h1>Hijo2</h1>
      <h3>{cantidad}</h3>
      <Hijo12/>
    </div>
  );
};
