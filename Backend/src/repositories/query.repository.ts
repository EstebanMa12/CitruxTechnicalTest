/* eslint-disable @typescript-eslint/no-unused-vars */
import QueryModel from "../models/query";
import { userQuestion } from "../models/query";

export const createQuery = async (userQuestions: userQuestion[], aiResponse: string, articleId: string) => {
    try {
        const querie = new QueryModel({ userQuestions, aiResponse, articleId });
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