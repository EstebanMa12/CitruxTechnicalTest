/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { URLResult } from "../../models/url.models";
import axios from 'axios'
import { setArticle, setError } from "./articleSlice";
import { Dispatch } from "@reduxjs/toolkit";


export const actionSendArticle = (url: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.post<URLResult>(`${import.meta.env.VITE_API_URL}/article`,
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
        } catch (error) {
            console.error("[service]: Error creating article", error);
            dispatch(setError('An error occurred'));
        }
    }
}
