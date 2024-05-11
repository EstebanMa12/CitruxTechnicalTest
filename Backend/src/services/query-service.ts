/* eslint-disable @typescript-eslint/no-unused-vars */
import { createQuery, getQueries, deleteQuery, getQueriesByArticleId } from "../repositories/query.repository";
import { questionResponse } from "../models/query";

export const createQueryService = async (userQuestion: questionResponse, aiResponse: questionResponse, articleId: string) => {
    try {
        const querie = createQuery(userQuestion, aiResponse, articleId);
        return querie;
    } catch (error) {
        console.error("[service]: Error creating querie");
        console.error(error);
    }
}

export const getQueriesService = async () => {
    try {
        const queries = getQueries();
        return queries;
    } catch (error) {
        console.error("[service]: Error getting queries");
        console.error(error);
    }
}

export const deleteQueryService = async (id: string) => {
    try {
        const querie = deleteQuery(id);
        return querie;
    } catch (error) {
        console.error("[service]: Error deleting querie");
        console.error(error);
    }
}

export const getQueriesByArticleIdService = async (articleId: string) => {
    try {
        const queries = getQueriesByArticleId(articleId)
        return queries
    } catch (error) {
        console.error("[service]: Error getting queries by articleId ")
        console.error(error);
    }
}