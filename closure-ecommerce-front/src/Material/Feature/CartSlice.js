import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axiosClient from "../../axiosClient";

export const fetchUserCart = createAsyncThunk('cart/getUserCart', async () => {
    try{
        const response = await axiosClient.get(`/api/cart/get-user-cart`);
        return response.data
    }catch(err){
        throw new Object(err.response.data);
    }
});

export const createOrUpdateUserCart = createAsyncThunk('cart/createOrUpdateUserCart', async (cart) => {
    try{
        const response = await axiosClient.post(`/api/cart/create-or-update-user-cart`,cart);
        return response.data
    }catch(err){
        throw new Object(err.response.data);
    }
});

export const deleteUserCartProduct = createAsyncThunk('cart/deleteUserCartProduct', async (productId) => {
    try{
        const response = await axiosClient.delete(`/api/cart/delete/user-cart-product`, {
            data: productId
        });
        return response.data
    }catch(err){
        throw new Object(err.response.data);
    }
});

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartProducts: [],
    },
    reducers: {
    },
    extraReducers: {
        [fetchUserCart().fulfilled]: (state, action) => {
            state.cartProducts = action.payload || [];
        }
    }
})

const { reducer: cartReducer } = cartSlice;
export default cartReducer;

