import {  createSlice } from "@reduxjs/toolkit";
import comp from "../assets/image 42.png";

const initialState = {
  ProductById: {
    id: 125,
    price: 2430,
    photo: comp,
    name: "MSI MPG Trident 3",
    about:
      "MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER,\
     16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard \
     and Mouse 3 Years Warranty Gaming Desktop",
    colors: ["#4B4D4F", "#F2E9DC", "#EAE8EB"],
    compParametr: [
      "Intel Core i7-10700F",
      "Intel H410",
      "WHITE",
      "NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6",
      "SO-DIMM 16GB (16GB x 1) DDR4 2666MHz",
      "2 total slots (64GB Max)",
      "512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM",
      "Gaming Keyboard GK30 + Gaming Mouse GM11",
      "3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)",
      " Intel WGI219Vethernet (10/100/1000M)",
      "AX200 (WIFI 6)+BT5.1",
      "PSU 330W",
      "Fan Cooler",
    ],
    specs: [
      {
        CPU: "N/A",
      },
      {
        Featured: "N/A",
      },
      {
        I_O_Ports: "N/A",
      },
    ],
  },
  tabs: [
    "About Product", "Details", "Specs"],
  selectTab: "About Product",
};

const productReducer = createSlice({
  name: "product",
  initialState,
  reducers: {
    changeTab: (state, action) => {
      state.selectTab = action.payload;
    },
  },
});

export const {changeTab} = productReducer.actions;
export default productReducer.reducer;
