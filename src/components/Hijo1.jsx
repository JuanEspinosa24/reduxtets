import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTitulo } from "../redux/slices/globalSlice";
import { Hijo11 } from "./nietos/Hijo11";

export const Hijo1 = () => {
  const dispatch = useDispatch();
  const { titulo } = useSelector((state) => state.global);

  const [value, setValue] = useState("");

  return (
    <div>
      <h1>Hijo1</h1>
      <input
        type="text"
        value={value}
        placeholder="Cambiar titulo"
        autoFocus
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(setTitulo(value))}>Cambiar</button>
      <h3>{titulo}</h3>
      <Hijo11 />
    </div>
  );
};
