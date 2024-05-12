/* eslint-disable @typescript-eslint/no-explicit-any */
import { startRequest, setArticle, setError } from './articlesSlice'
import { Dispatch } from "@reduxjs/toolkit";
import axios from 'axios'

export const getArticles = () => {
    return async (dispatch: Dispatch) => {
        dispatch(startRequest());
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/articles`);
            // console.log(data)
            dispatch(setArticle(data));
        } catch (error: any) {
            console.error(error)
            dispatch(setError(error.message));
        }
    }
}