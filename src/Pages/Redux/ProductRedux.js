import { configureStore } from "@reduxjs/toolkit";
import ecommerce from "./Sclice/ProductSclice";
export const Store = configureStore({
    reducer: {
        redux: ecommerce,
    }
}) 