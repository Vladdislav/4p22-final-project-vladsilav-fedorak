import { createSlice } from '@reduxjs/toolkit'


export const InputSlice = createSlice({
    name:'input',
    initialState: '',
    reducers:{
        setInputValue: (state,value) => {
            return state = value;
        },
        getInputValue: (state) => {
            return state;
        },

    }
});
export const {getInputValue, setInputValue} = InputSlice.actions;
export default InputSlice.reducer;