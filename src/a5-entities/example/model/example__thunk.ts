import { createAsyncThunk } from '@reduxjs/toolkit';

import { example } from '@a6-shared/api/example';

// --- Пример кода
type example__Thunk__PROPS = {
    exampleId: string;
};

export const example__Thunk = createAsyncThunk(
    'example/action',
    async (props: example__Thunk__PROPS, { rejectWithValue }) => {
        const { data, response } = await example(props);

        if (data) {
            return data;
        } else if (response) {
            return rejectWithValue(response.data);
        }
    },
);
