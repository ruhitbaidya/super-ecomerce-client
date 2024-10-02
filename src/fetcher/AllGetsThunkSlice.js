import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchGetData = createAsyncThunk('getData/all', async(url)=>{
    const res = await axios.get(url);
    return res.data
 })

const getDataSlice = createSlice({
    name : 'getData',
    initialState : {
        isLoading : false,
        data : [],
        error : null
    },
    extraReducers : (builder)=>{
        builder.addCase(fetchGetData.pending, (state) =>{
            state.isLoading = true
        });
        builder.addCase(fetchGetData.fulfilled, (state, action)=>{
            state.data = action.payload
        });
        builder.addCase(fetchGetData.rejected, (state, action)=>{
            state.error = action.error.message
        });
    }
})


export default getDataSlice.reducer