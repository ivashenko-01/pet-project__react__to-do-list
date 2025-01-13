import { configureStore } from '@reduxjs/toolkit';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useStore } from 'react-redux';

import { TypedUseSelectorHook } from 'react-redux';

import exampleSlice from '@a5-entities/example/model/example__slice';

export const store = configureStore({
    reducer: {
        example: exampleSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

export const useAppDispatch: () => RootDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore = useStore.withTypes<typeof store>();

// --- STATE

import { INITIALSTATE as INITIALSTATE__TASK } from '@a5-entities/example/model/example__slice';

export interface STATE {
    example: INITIALSTATE__TASK;
}
