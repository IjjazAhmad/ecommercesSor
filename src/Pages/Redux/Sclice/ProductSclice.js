import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const FetchProduct = createAsyncThunk("FetchProduct", async (state, action) => {
    const res = await fetch('https://fakestoreapi.com/products');
    return await res.json();
})
export const FetchCategories = createAsyncThunk("FetchCategories", async (state, action) => {
    const res = await fetch("https://fakestoreapi.com/products")
    return await res.json();
})

const ecommercesclice = createSlice({
    name: "Ecommerce",
    initialState: {
        isLoading: false,
        products: [],
        isErrer: false,
        categories: [],
        selectedCategory: null,
    },
    extraReducers: (builder) => {
        builder.addCase(FetchProduct.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(FetchProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload
            console.log("products", action.payload)
        })
        builder.addCase(FetchProduct.rejected, (state, action) => {
            state.isErrer = true;
        })
        builder.addCase(FetchCategories.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(FetchCategories.rejected, (state, action) => {
            state.isErrer = true;
        })
        builder.addCase(FetchCategories.fulfilled, (state, action) => {
            const getuiniqe = (data, propety) => {
                let newVal = data.map((curelem) => {
                    return curelem[propety]
                })

                return newVal = ["All Categories", ...new Set(newVal)]
            }
            const categoryonlydata = getuiniqe(action.payload, "category")
            state.categories = categoryonlydata
        })
    }
});
export default ecommercesclice.reducer;