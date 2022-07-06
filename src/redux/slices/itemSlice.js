import { createSlice } from '@reduxjs/toolkit';

export const itemSlice = createSlice({
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