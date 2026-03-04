import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
  name: "cartslice",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const findproduct = state.find(
        (product) => product.id === action.payload.id
      );

      if (findproduct) {
        findproduct.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    decreaseQuantity: (state, action) => {
      const findproduct = state.find(
        (product) => product.id === action.payload.id
      );

      if (findproduct) {
        if (findproduct.quantity > 1) {
          findproduct.quantity -= 1;
        } else {
          return state.filter(
            (product) => product.id !== action.payload.id
          );
        }
      }
    },

    deletefromcart: (state, action) => {
      return state.filter(
        (product) => product.id !== action.payload.id
      );
    },

    clear: () => [],
  },
});

export const {
  addToCart,
  deletefromcart,
  decreaseQuantity,
  clear,
} = cartslice.actions;

export default cartslice.reducer;