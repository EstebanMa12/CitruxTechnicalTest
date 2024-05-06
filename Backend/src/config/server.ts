
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */

import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

//MONGO
import {connect} from "../config/database/mongoConfig";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
connect()

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

import ArticleModel from "../models/queries";

const article = new ArticleModel({
    content: "This is a test article",
    url: "test-article",
    createdAt: new Date()
});

console.log(article)