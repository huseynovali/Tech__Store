import { createReducer, createSlice } from "@reduxjs/toolkit";
import comp from "../assets/image 42.png";

const initialState = {
  cardProduct: [
    {
      id: 1,
      quality: 2,
      photo: comp,
      oldPrice: 700,
      nowPrice: 500,
      text: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
    },
    {
      id: 2,
      quality: 3,
      photo: comp,
      oldPrice: 700,
      nowPrice: 500,
      text: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
    },
    {
      id: 3,
      quality: 5,
      photo: comp,
      oldPrice: 700,
      nowPrice: 500,
      text: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
    },
  ],
};

const cardReducer = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const existingProduct = state.cardProduct.find(
        (item) => item.id === action.payload.data.id
      );

      if (existingProduct) {
        existingProduct.quality += +action.payload.compCound;
      } else {
        state.cardProduct.push({
          ...action.payload.data,
          quality: action.payload.compCound,
        });
      }
    },
    deleteCardProduct: (state, action) => {
      state.cardProduct = state.cardProduct.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { deleteCardProduct, addCart } = cardReducer.actions;
export default cardReducer.reducer;
