import { createSlice } from "@reduxjs/toolkit";
// import {
//   loadBanners, loadCategories, loadMenus,
//   loadSettings,
//   loadStoreInfo,
// } from "../../actions/store";

export const initialState = {
}

export const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => builder
})

export default storeSlice;