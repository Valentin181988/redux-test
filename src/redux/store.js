import { configureStore } from '@reduxjs/toolkit';
import { myValueSlice } from './slices/counterSlice';
/* import { createAction, createReducer, createSlice } from '@reduxjs/toolkit'; */

export const store = configureStore({
    reducer: {
      myValue: myValueSlice.reducer,
      /* items: itemSlice.actions, */
    },
  });

/* export const increment = createAction('myValue/increment');
export const decrement = createAction('myValue/decrement');

const myReduser = createReducer(0, {
    [increment]: (state, action) => state + action.payload,
    [decrement]: (state, action) => state - action.payload,
}); */

/* export const add = createAction('items/add');
export const remove = createAction('items/remove');

const itemsReducer = createReducer([], {
    [add]: (state, action) => [...state, action.payload],
    [remove]: (state, action) => state.filter(item => item.id !== action.payload),
}); */

/* export const store = configureStore({
  reducer: {
    myValue: myReduser,
    items: itemsReducer,
  },
}); */