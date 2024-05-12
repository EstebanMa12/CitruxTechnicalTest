import { createSlice } from "@reduxjs/toolkit";
import { queryModel } from "../../models/query.models";

const querySlice = createSlice({
    name: "query",
    initialState: {
        queries: [] as queryModel[],
        error: null,
        loading: false,
    },
    reducers: {
        startRequest: (state) => {
            state.loading = true;
            state.error = null
        },
        setQuery: (state, action) => {
            state.queries = action.payload;
            state.loading = false;
            state.error = null;
        },
        setError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        addQuery: (state, action) => {
            state.loading = false;
            state.queries = [...state.queries, action.payload];
            state.error = null;
        }
    },
});

export const { startRequest, setQuery, setError, addQuery } = querySlice.actions;
export default querySlice.reducer;
