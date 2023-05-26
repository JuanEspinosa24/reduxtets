import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  titulo: "cualquier cosa",
  fecha: Date.now(),
  cantidad: 20,
  universidad: "upb",
};

const globalSlice = createSlice({
  name: "globalState",
  initialState,
  reducers: {
    setTitulo: (state, action) => {
      //   state.titulo = "cristian";
      state.titulo = action.payload;
    },

    setCantidad: (state, action) => {
      //   state.titulo = "cristian";
      state.cantidad = action.payload;
    },

    setFecha: (state, action) => {
      //   state.titulo = "cristian";
      state.fecha = action.payload;
    },

    setuniversidad: (state, action) => {
      //   state.titulo = "cristian";
      state.universidad = action.payload;
    },
  },
});

export const { setTitulo, setCantidad, setFecha, setuniversidad } =
  globalSlice.actions;

export default globalSlice.reducer;
