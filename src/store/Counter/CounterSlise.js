import { createSlice} from '@reduxjs/toolkit'


export const CounterSlice = createSlice({
    name:'counter',
    initialState: {
        value:0,
        id: 0
    },
    reducers:{
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            
            state.value -= 1;
        },
        setIdCounter: (state, action) => {
            state.id = action.payload;
        }

    }
});
export const {increment, decrement, setIdCounter} = CounterSlice.actions;
export default CounterSlice.reducer;