import { createSlice } from "@reduxjs/toolkit";

const heartslice = createSlice({
  name: "heartslice",
  initialState: [], // لا تستخدم localStorage هنا
  reducers: {
    addtoheart: (state, action) => {
      const exist = state.find(p => p.id === action.payload.id);
      if (!exist) state.push(action.payload);
    },
    setHeart: (state, action) => action.payload // للتحميل من localStorage
  },
});

export const { addtoheart, setHeart } = heartslice.actions;
export default heartslice.reducer;