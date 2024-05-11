/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { URLResult } from "../../models/url.models";
import axios from 'axios'
// import dotenv from 'dotenv'
import { setArticle, setError } from "./articleSlice";
import { Dispatch } from "@reduxjs/toolkit";

// dotenv.configDotenv()
const apiUrl ="http://localhost:4000/api/v1";
export const actionSendArticle = (url: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.post<URLResult>(`${apiUrl}/article`,
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
