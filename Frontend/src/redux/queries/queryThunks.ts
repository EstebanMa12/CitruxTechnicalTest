/* eslint-disable @typescript-eslint/no-explicit-any */
import { startRequest, setError, setQuery } from "./querySlice";
import { Dispatch } from "@reduxjs/toolkit";
import axios from 'axios'
import { questionResponse } from "../../models/query.models";

export const getQuerybyArticleId = (articleId: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(startRequest());
        try {
            const { data } = await axios.get(`http://localhost:4000/api/v1/queries/${articleId}`);
            console.log("data", data)
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
            // console.log("UserQuestions", userQuestion);
            // console.log("articleId", articleId)
            const { data } = await axios.post(`http://localhost:4000/api/v1/query`, { userQuestion, articleId });
            // console.log("data", data)
            dispatch(setQuery(data));
        } catch (error: any) {
            console.error(error)
            dispatch(setError(error.message));
        }
    }
}