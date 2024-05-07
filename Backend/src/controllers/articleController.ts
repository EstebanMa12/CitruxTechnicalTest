/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createArticleService, deleteArticleService, getArticlesService } from './../services/article-service';

import { Request, Response } from 'express';
import OpenAI from "openai";
import axios from 'axios';
import * as cheerio from 'cheerio';

const openai = new OpenAI({
    organization: process.env.ORGANIZATION,
    apiKey: "sk-proj-FMdPY88O3CRjI2SsXjDqT3BlbkFJ9FF54fKsLyJcakJenyH8"
});

export const createArticleController = async (req: Request, res: Response) => {
    const { url } = req.body;
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        const title = $('title').text();
        const content = $('p').text();

        const article = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: "You are an Article Summarizer AI who will be in charge of providing summaries and answering questions according to the user's needs." 
                },
                {
                    role: "system",
                    content: "The following is an article about " + title + ". Please summarize it."
                },
                {
                    role: "user",
                    content: content
                }
            ]
        });

        const responseArticle = await createArticleService(url, article.choices[0].message.content!);
        res.status(200).json(responseArticle);
    } catch (error) {
        console.error("[controller]: Error creating article", error);
        res.status(500).json({ message: "Error creating article" });
    }
}

export const getArticlesController = async (req: Request, res: Response) => {
    try {
        const response = await getArticlesService();
        res.status(200).json(response);
    } catch (error) {
        console.error("[controller]: Error getting articles", error);
        res.status(500).json({ message: "Error getting articles" });
    }
}

export const deleteArticleController = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const response = await deleteArticleService(id);
        res.status(200).json(response);
    } catch (error) {
        console.error("[controller]: Error deleting article", error);
        res.status(500).json({ message: "Error deleting article" });
    }
}