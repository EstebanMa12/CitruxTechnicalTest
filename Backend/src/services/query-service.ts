/* eslint-disable @typescript-eslint/no-unused-vars */
import { createQuery, getQueries, deleteQuery } from "../repositories/query.repository";

export const createQueryService = async (userQuestion: string, aiResponse: string, article: string) => {
    try {
        const querie = createQuery(userQuestion, aiResponse, article);
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