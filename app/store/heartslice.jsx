import { createSlice } from "@reduxjs/toolkit";

const heartslice = createSlice({
  name: "heartslice",
  initialState: [], // لا تستخدم localStorage هنا
  reducers: {
    addtoheart: (state, action) => {
   const findproduct = state.find((product)=> product.id === action.payload.id)
   if(findproduct) {
      findproduct.quantity += 1
   }else{
    state.push({...action.payload, quantity: 1})
   }
    },
    decreaseheart: (state, action) => {
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
    setHeart: (state, action) => action.payload, // للتحميل من localStorage
  deletefromheart:(state,action)=>{
     return state.filter((product)=>product.id !== action.payload.id)
  },
  clear:(state,action)=>{
   return  []
  }
  },
});

export const { addtoheart, setHeart,deletefromheart,clear,decreaseheart } = heartslice.actions;
export default heartslice.reducer;