import { createSlice } from '@reduxjs/toolkit';

export const myValueSlice = createSlice({
    name: 'myValue',
    initialState: 150,
    reducers: {
        increment(state, action) {
            return state + action.payload;
        },
        decrement(state, action) {
            return state - action.payload;
        },
    },
});

export const { increment, decrement } = myValueSlice.actions;

const itemSlice = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
        add(state, action) {
            return [...state, action.payload]
        },
        remove(state, action) {
            return state.filter(item => item.id !== action.payload);
        },
    },
});

export const { add, remove } = itemSlice.actions;