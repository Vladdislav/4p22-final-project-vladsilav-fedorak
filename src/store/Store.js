import {configureStore}from '@reduxjs/toolkit'
import counterReducer from './Counter/CounterSlise'
import InputSlice from './Input/InputSlice';
export default configureStore({
    reducer: {
        counter: counterReducer,
        input: InputSlice
    }
});