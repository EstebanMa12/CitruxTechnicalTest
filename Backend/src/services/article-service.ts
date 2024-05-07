
/* eslint-disable @typescript-eslint/no-unused-vars */

import { createArticle, getArticles, deleteArticle } from "../repositories/article.repository";


export const createArticleService = async (url: string, content: string) => {
    try {
        const article = createArticle(url, content);
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
