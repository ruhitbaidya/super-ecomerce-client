import {configureStore} from '@reduxjs/toolkit'
import getDataReducer from '../fetcher/AllGetsThunkSlice'
const store = configureStore({
    reducer : {
        getData : getDataReducer
    }
})

export default store
