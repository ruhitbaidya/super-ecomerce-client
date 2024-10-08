import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

 const allPostSend = ()=> {
    return createAsyncThunk('allPost/all', async()=>{
    const res = await axios.post(url, data);
    return res.data
})}


const allPostSlice = createSlice({
    name : 'allPost',
    initialState : {
        isLoading : false,
        data : [],
        error : null
    },
    extraReducers : (builder)=>{
        builder.addCase(allPostSend.pending, (state)=>{
            state.isLoading = true
        })
        builder.addCase(allPostSend.fulfilled, (state, action)=>{
            state.isLoading = false,
            state.data = action.payload,
            state.error = null
        })
        builder.addCase(allPostSend.rejected, (state, action)=>{
            state.isLoading = false,
            state.data = null,
            state.error = action.error.message        
        })
    }
})

export default allPostSlice.reducer