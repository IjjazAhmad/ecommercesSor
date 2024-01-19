import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Sclice/ProductSclice";
import cartReducer from "./Sclice/cartSlice";
import singleProductReducer from "./Sclice/singleProductSlice";

export const Store = configureStore({
    reducer: {
        redux: productReducer,
        cart: cartReducer,
        singleProduct: singleProductReducer,
    }
});
