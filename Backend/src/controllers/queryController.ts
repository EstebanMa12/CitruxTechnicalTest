/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { createQueryService, getQueriesService, deleteQueryService } from "../services/query-service";
import { Request, Response } from 'express';
import OpenAI from "openai";


const openai = new OpenAI({
    organization: process.env.ORGANIZATION,
    apiKey: process.env.OPENAI_API_KEY
});

export const createQueryController = async (req: Request, res: Response) => {

    const { userQuestion, article } = req.body;
    try {
        const airesponse = await openai.chat.completions.create({
            messages: [{
                role: "system",
                content: "Summarize the following article: " + article
            }, {
                role: "user",
                content: userQuestion
            }],
            model: "gpt-3.5-turbo"
        })
        const response = airesponse
    } catch (error) {
        console.error("[controller]: Error creating querie");
        console.error(error);
    }

}