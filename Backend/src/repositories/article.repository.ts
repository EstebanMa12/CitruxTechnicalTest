/* eslint-disable @typescript-eslint/no-unused-vars */
import ArticleModel from "../models/article";

export const createArticle = async (url: string, content: string) => {
    try {
        const article = new ArticleModel({ url, content, createdAt: new Date() });
        await article.save();
        return article;
    } catch (error) {
        console.error("[repository]: Error creating article");
        console.error(error);

    }
}

export const getArticles = async () => {
    try {
        const articles = await ArticleModel.find();
        return articles;
    } catch (error) {
        console.error("[repository]: Error getting articles");
        console.error(error);
    }
}

export const deleteArticle = async (id: string) => {
    try {
        const article = await ArticleModel.findByIdAndDelete(id);
        return article;
    } catch (error) {
        console.error("[repository]: Error deleting article");
        console.error(error);
    }
}