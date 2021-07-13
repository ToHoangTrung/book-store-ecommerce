import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axiosClient from "../../axiosClient";

export const fetchAllUserPayment = createAsyncThunk('cart/fetchAllUserPayment', async () => {
    try{
        const response = await axiosClient.get(`/api/payment/get-all-user-payment`);
        return response.data
    }catch(err){
        throw new Object(err.response.data);
    }
});

export const fetchUserPaymentById = createAsyncThunk('cart/fetchUserPaymentById', async (paymentId) => {
    try{
        const response = await axiosClient.get(`/api/payment/get-one-user-payment/${paymentId}`);
        return response.data
    }catch(err){
        throw new Object(err.response.data);
    }
});

export const createUserPayment = createAsyncThunk('cart/createUserPayment', async (carts) => {
    try{
        const response = await axiosClient.post(`/api/payment/create-user-payment`, carts);
        return response.data
    }catch(err){
        throw new Object(err.response.data);
    }
});

const paymentSlice = createSlice({
    name: 'payment',
    initialState: {
        payments: []
    },
    reducers: {
    },
    extraReducers: {
        [fetchAllUserPayment.fulfilled]: (state, action) => {
            state.payments = action.payload || [];
        }
    }
})

const { reducer: paymentReducer } = paymentSlice;
export default paymentReducer;

