import { createSlice } from "@reduxjs/toolkit";
import { articleModel } from "../../models/article.models";

const articlesSlice = createSlice({
    name: "articles",
    initialState: {
        articles: [] as articleModel[],
        error: null,
        loading: false,
    },
    reducers: {
        startRequest: (state) => {
            state.loading = true;
            state.error = null
        },
        setArticle: (state, action) => {
            state.articles = action.payload;
            state.loading = false;
            state.error = null;
        },
        setError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        addArticle: (state, action) => {
            state.loading = false;
            state.articles = [...state.articles, action.payload];
            state.error = null;
        }
    },
});

export const { startRequest, setArticle, setError, addArticle } = articlesSlice.actions;
export default articlesSlice.reducer;