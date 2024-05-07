
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */

import express, { Express, Request, Response, json, urlencoded } from "express";
import dotenv from "dotenv";

import routes from "../config/routes/routes";

const cors = require('cors')

//MONGO
import {connect} from "../config/database/mongoConfig";

dotenv.config();

const app: Express = express();
app.use(cors())
const port = process.env.PORT || 3000;
connect()

//Middleware
app.use(json());
app.use(urlencoded({ extended: false }));

app.get(`${process.env.API_VERSION_ROUTE}/`, (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

app.use(`${process.env.API_VERSION_ROUTE}`, routes);


