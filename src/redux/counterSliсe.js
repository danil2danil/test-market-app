import { createSlice } from '@reduxjs/toolkit'

const counterSlise = createSlice({
    name: 'counter',
    initialState:{
        value: 0
    },
    reducers: {
        counterIncrement: (state, action)=>{
            state.value+=1;
        },
        counterDecrement: (state, action)=>{
            state.value-=1;
        } 
    }
});


export const {counterDecrement, counterIncrement} = counterSlise.actions
export default counterSlise.reducer