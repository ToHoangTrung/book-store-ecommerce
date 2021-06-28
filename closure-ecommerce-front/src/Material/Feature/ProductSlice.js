import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axiosClient from "../../axiosClient";

export const fetchAllProduct = createAsyncThunk('product/fetchAllProduct', async () => {
    try{
        const response = await axiosClient.get(`/api/products/`);
        return response.data
    }catch(err){
        throw new Object(err.response.data);
    }
});

export const fetchProductById = createAsyncThunk('product/fetchProductsById', async (id) => {
    try{
        const response = await axiosClient.get(`/api/products/get-by-id/${id}`);
        return response.data
    }catch(err){
        throw new Object(err.response.data);
    }
});

export const fetchProductsByCatalogId = createAsyncThunk('product/fetchProductsByCatalogId', async (id) => {
    try{
        const response = await axiosClient.get(`/api/products/get-by-catalog-id/${id}`);
        return response.data
    }catch(err){
        throw new Object(err.response.data);
    }
});


const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
    },
    reducers: {
    },
    extraReducers: {
        [fetchProductsByCatalogId.fulfilled]: (state, action) => {
            state.products = action.payload || [];
        },
        [fetchProductById.fulfilled]: (state, action) => {
            state.products = action.payload || [];
        },
        [fetchAllProduct.fulfilled]: (state, action) => {
            state.products = action.payload || [];
        },
    }
})

const { reducer: productReducer } = productSlice;
export default productReducer;

export const selectAllProduct = (state) => state.product.products;
