/* eslint-disable @typescript-eslint/no-unused-vars */
import { configureStore } from '@reduxjs/toolkit';
import articleReducer from './article/articleSlice';
import queryReducer from './queries/querySlice';

// import { thunk } from 'redux-thunk';

export const store = configureStore({
    reducer: {
        article: articleReducer,
        query: queryReducer
    },
    // middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(thunk),
});

// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']
