/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from "mongoose";

export const connect = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_DB_URI!);
        console.log("[database]: Connected to the database: ", db.connection.name);
    } catch (e) {
        console.error("[database]: Error connecting to the database");
        console.error(e);
    }
}