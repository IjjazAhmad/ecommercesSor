import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState: {
    singleProduct: {},
    loading: false,
    error: null,
  },
  reducers: {
    fetchSingleProductStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchSingleProductSuccess(state, action) {
      state.loading = false;
      state.singleProduct = action.payload;
    },
    fetchSingleProductError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchSingleProductStart,
  fetchSingleProductSuccess,
  fetchSingleProductError,
} = singleProductSlice.actions;

export const fetchSingleProduct = (productId) => async (dispatch) => {
  try {
    dispatch(fetchSingleProductStart());
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
    const data = response.data;
    dispatch(fetchSingleProductSuccess(data));
  } catch (error) {
    dispatch(fetchSingleProductError(error.message));
  }
};

export default singleProductSlice.reducer;
