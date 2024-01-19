import { createSlice  } from "@reduxjs/toolkit";
const getLocalCartData = () => {
    let localCartData = localStorage.getItem("cartProduct");

    if (!localCartData || JSON.parse(localCartData).length === 0) {
        return [];
    } else {
        return JSON.parse(localCartData);
    }
};
const cartSlice = createSlice({
    name: "cartProduct",
    initialState: {
        cart: getLocalCartData(),
    },
    reducers: {
        addproduct(state, action) {
            state.cart.push(action.payload)
            localStorage.setItem("cartProduct", JSON.stringify(state.cart));
        },
        removeproduct(state, action) {
            let updatedCart = state.cart.filter(
                (curItem) => curItem.id != action.payload
            );
            return {
                ...state,
                cart: updatedCart,
            };
        },
        deleteproduct(state, action) {
            state.cart = [];
        },
    },
})

export const {addproduct,removeproduct,deleteproduct} = cartSlice.actions

export default cartSlice.reducer