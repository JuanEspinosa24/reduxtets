import React, { useState } from "react";
import { useSelector } from "react-redux";

export const Hijo11 = () => {
  const { universidad } = useSelector((state) => state.global);

  return (
    <div>
      <h1>soy el hijo de hijo1</h1>
      <h1>{universidad}</h1>
    </div>
  );
};
