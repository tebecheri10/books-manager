import {  configureStore } from '@reduxjs/toolkit';
import booksReducer from '../features/bookSlice';
import alertModalReducer from '../features/alertModalSlice'

const store = configureStore({
    reducer:{
        books:booksReducer,
        alertModal: alertModalReducer
    }
})

export default store