import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axiosClient from "../../axiosClient";

export const fetchAllCatalog = createAsyncThunk('catalog/fetchAllCatalog', async () => {
    try{
        const response = await axiosClient.get(`/api/catalogs/`);
        return response.data
    }catch(err){
        throw new Object(err.response.data);
    }
});

const catalogSlice = createSlice({
    name: 'catalog',
    initialState: {
        catalogs: [],
    },
    reducers: {
    },
    extraReducers: {
        [fetchAllCatalog.fulfilled]: (state, action) => {
            state.catalogs = action.payload || [];
        }
    }
})

const { reducer: catalogReducer } = catalogSlice;
export default catalogReducer;

export const selectAllCatalog  = (state) => state.catalog.catalogs;
