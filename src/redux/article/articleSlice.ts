import { createSlice } from "@reduxjs/toolkit";

const articleSlice = createSlice({
    name: "article",
    initialState: {
        url: null,
        content: null,
        summary: null,
        _id: null,
        error: null,
        loading: false,
    },
    reducers: {
        setLoading: (state) => {
            state.loading = true;
            state.error = null;
        },
        setArticle: (state, action) => {
            state.url = action.payload.url;
            state.content = action.payload.content;
            state.summary = action.payload.summary;
            state._id = action.payload._id;
            state.error = null;
            state.loading = false;
        },
        setError : (state, action) =>{
            state.error = action.payload;
        }
    },
});

export const { setArticle, setError, setLoading } = articleSlice.actions;
export default articleSlice.reducer;
