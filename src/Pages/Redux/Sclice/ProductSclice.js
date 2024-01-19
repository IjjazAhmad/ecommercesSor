import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchProduct = createAsyncThunk("FetchProduct", async (state, action) => {
    const respons = await axios.get('https://fakestoreapi.com/products');
    return await respons.data;
})
export const FetchCategories = createAsyncThunk("FetchCategories", async (state, action) => {
    const res = await fetch("https://fakestoreapi.com/products")
    let dat = await res.json();
    const getuiniqe = (data, propety) => {
        let newVal = data.map((curelem) => {
            return curelem[propety]
        })

        return newVal = ["All", ...new Set(newVal)]
    }
    let categoryonlydata;
    return categoryonlydata = getuiniqe(dat, "category")
})


const ecommercesclice = createSlice({
    name: "product",
    initialState: {
        isLoading: false,
        products: [],
        isErrer: false,
        categories: [],
    },
    reducers: {
        FetchCategories(state, action) {
            // state.products
            console.log("🚀 ~ FetchCategories ~ state.products:", state.products)
        },
    },
    extraReducers: (builder) => {
        builder.addCase(FetchProduct.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(FetchProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload
        })
        builder.addCase(FetchProduct.rejected, (state, action) => {
            state.isErrer = true;
        })
        builder.addCase(FetchCategories.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(FetchCategories.fulfilled, (state, action) => {
            state.isLoading = false;
            state.categories = action.payload
        })
        builder.addCase(FetchCategories.rejected, (state, action) => {
            state.isErrer = true;
        })
    }
});
export const { addproduct, removeproduct, deleteproduct } = ecommercesclice.actions;
export default ecommercesclice.reducer;