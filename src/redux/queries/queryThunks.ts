/* eslint-disable @typescript-eslint/no-explicit-any */
import { startRequest, setError, setQuery } from "./querySlice";
import { Dispatch } from "@reduxjs/toolkit";
import axios from 'axios'
import { questionResponse } from "../../models/query.models";


export const getQuerybyArticleId = (articleId: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(startRequest());
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/queries/${articleId}`);
            dispatch(setQuery(data));
        } catch (error: any) {
            console.error(error)
            dispatch(setError(error.message));
        }
    }
}

export const sendQuery = (userQuestion: questionResponse, articleId: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(startRequest());
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/query`, { userQuestion, articleId });
            dispatch(setQuery(data));
        } catch (error: any) {
            console.error(error)
            dispatch(setError(error.message));
        }
    }
}