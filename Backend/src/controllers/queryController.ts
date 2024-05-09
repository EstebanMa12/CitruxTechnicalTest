/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { createQueryService, getQueriesService, deleteQueryService } from "../services/query-service";
import { getArticleService } from "../services/article-service";
import { Request, Response } from 'express';
import OpenAI from "openai";

import dotenv from "dotenv";

dotenv.config()

const openai = new OpenAI({
    organization: process.env.ORGANIZATION,
    apiKey: process.env.OPENAI_API_KEY
});

export const createQueryController = async (req: Request, res: Response) => {

    const { userQuestions, articleId } = req.body;
    try {

        const article = await getArticleService(articleId);
        if (!article) {
            return res.status(404).send("Article not found");
        }

        const airesponse = await openai.chat.completions.create({
            messages: [{
                role: "system",
                content: `You are a helpful assistant for an article about ${article?.content}`
            },
            ...userQuestions,
        ],
            model: "gpt-3.5-turbo"
        })
        const response = await createQueryService(userQuestions, airesponse.choices[0].message.content!, articleId);
        res.status(200).json(response);
    } catch (error) {
        console.error("[controller]: Error creating query", error);
        res.status(500).json({ message: "Error creating query" });
    }

}

export const getQueriesController = async (req: Request, res: Response) => {
    try {
        const response = await getQueriesService();
        res.status(200).json(response);
    } catch (error) {
        console.error("[controller]: Error getting queries", error);
        res.status(500).json({ message: "Error getting queries" });
    }
}

export const deleteQueryController = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const response = await deleteQueryService(id);
        res.status(200).json(response);
    } catch (error) {
        console.error("[controller]: Error deleting querie", error);
        res.status(500).json({ message: "Error deleting querie" });
    }
}