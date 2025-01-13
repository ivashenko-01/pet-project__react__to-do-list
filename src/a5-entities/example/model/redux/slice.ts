import { createSlice } from '@reduxjs/toolkit';

import { example__Thunk } from './thunk';

export interface INITIALSTATE {
    isLoading: boolean;
    status: string;
}

const initialState: INITIALSTATE = {
    isLoading: false,
    status: 'Загрузка',
};

export const exampleSlice = createSlice({
    name: 'example',
    initialState: initialState,
    reducers: {
        set__Example_Status: (state, action) => {
            state.status = action.payload;
        },
    },
    extraReducers: (builder) => {
        // --- Пример кода
        builder.addCase(example__Thunk.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(example__Thunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.status = action.payload.message;
        });
        builder.addCase(example__Thunk.rejected, (state) => {
            state.isLoading = false;
            state.status = 'error';
        });
    },
});

export const { set__Example_Status } = exampleSlice.actions;

export default exampleSlice.reducer;
