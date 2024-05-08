import { createSlice } from "@reduxjs/toolkit";

const articleSlice = createSlice({
    name: "article",
    initialState: {
        url: null,
        content: null,
        summary: null,
        _id: null,
    },
    reducers: {
        setArticle: (state, action) => {
            state.url = action.payload.url;
            state.content = action.payload.content;
            state.summary = action.payload.summary;
            state._id = action.payload._id;
        },
    },
});

export const { setArticle } = articleSlice.actions;