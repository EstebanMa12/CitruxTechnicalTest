
/* eslint-disable @typescript-eslint/no-unused-vars */

import { createArticle, getArticles, deleteArticle, getArticle } from "../repositories/article.repository";


export const createArticleService = async (url: string, content: string, summary: string) => {
    try {
        const article = createArticle(url, content, summary);
        return article;
    } catch (error) {
        console.error("[service]: Error creating article");
        console.error(error);
    }
}

export const getArticlesService = async () => {
    try {
        const articles = getArticles();
        return articles;
    } catch (error) {
        console.error("[service]: Error getting articles");
        console.error(error);
    }
}


export const deleteArticleService = async (id: string) => {
    try {
        const article = deleteArticle(id);
        return article;
    } catch (error) {
        console.error("[service]: Error deleting article");
        console.error(error);
    }
}

export const getArticleService = async (id: string) => {
    try {
        const article = getArticle(id);
        return article;
    } catch (error) {
        console.error("[service]: Error getting article");
        console.error(error);
    }
}