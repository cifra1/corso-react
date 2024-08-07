import { createSlice } from "@reduxjs/toolkit";

// e' la slice dedicata al counter
export const counterSlice = createSlice({
    name: 'counter',        //nome dello slice
    initialState: {
        value: 0,       //valore iniziale delo slice
    },
    //i reducers sono le azioni (funzioni) che operano su uno stato
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const counterReducer = counterSlice.reducer