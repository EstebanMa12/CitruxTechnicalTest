/* eslint-disable @typescript-eslint/no-unused-vars */
import QueryModel from "../models/query";
import { questionResponse } from "../models/query";

export const createQuery = async (userQuestion: questionResponse, aiResponse: questionResponse, articleId: string) => {
    try {
        const querie = new QueryModel({ userQuestion, aiResponse, articleId, createdAt: new Date()});
        await querie.save();
        return querie;
    } catch (error) {
        console.error("[repository]: Error creating querie");
        console.error(error);

    }
}

export const getQueries = async () => {
    try {
        const queries = await QueryModel.find();
        return queries;
    } catch (error) {
        console.error("[repository]: Error getting queries");
        console.error(error);
    }
}

export const deleteQuery = async (id: string) => {
    try {
        const querie = await QueryModel.findByIdAndDelete(id);
        return querie;
    } catch (error) {
        console.error("[repository]: Error deleting querie");
        console.error(error);
    }
}

export const getQueriesByArticleId = async (articleId : string) =>{
    try {
        const queries = await QueryModel.find({articleId});
        return queries;
    } catch (error) {
        console.error("[repository]: Error getting queries by articleId");
        console.error(error);
    }
}