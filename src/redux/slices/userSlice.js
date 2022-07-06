import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        login: "",
        isLoggedIn: false,
    },
    reducers: {
        logIn(state, action) {
            state.login = action.payload;
            state.isLoggedIn = true;
        },
        logOut(state, action) {
            state.login = "";
            state.isLoggedIn = false;
        },
    },
});

export const { logIn, logOut } = userSlice.actions;