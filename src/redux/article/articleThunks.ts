/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { articleModel } from "../../models/article.models";
import axios from 'axios'
import { setArticle, setError, setLoading } from "./articleSlice";
import { Dispatch } from "@reduxjs/toolkit";
import { getArticles } from "../articles/articlesThunks";


export const actionSendArticle = (url: string) => {
    return async (dispatch: Dispatch) => {
        if(!url) return dispatch(setError('Please enter a URL'));
        dispatch(setLoading());
        try {
            const response = await axios.post<articleModel>(`${import.meta.env.VITE_API_URL}/article`,
                { url },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            dispatch(setArticle({
                url: response.data.url,
                content: response.data.content, 
                summary: response.data.summary,
                _id: response.data._id
            }))
            dispatch(getArticles())
        } catch (error) {
            console.error("[service]: Error creating article", error);
            dispatch(setError('An error occurred'));
        }
    }
}

export const actionGetArticle = (id: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(setLoading());
        try {
            const {data}= await axios.get<articleModel>(`${import.meta.env.VITE_API_URL}/article/${id}`);
            dispatch(setArticle(data));
    } catch (error) {
        console.error("[service]: Error getting article", error);
        dispatch(setError('An error occurred'));
        
    }}
}

export const actionDeleteArticle = (id: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(setLoading());
        try {
            await axios.delete<articleModel>(`${import.meta.env.VITE_API_URL}/article/${id}`);
            dispatch(setArticle({}));
            dispatch(getArticles());
        } catch (error) {
            console.error("[service]: Error deleting article", error);
            dispatch(setError('An error occurred'));
        }
    }
}
