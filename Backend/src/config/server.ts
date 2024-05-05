/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { json, urlencoded } = require("express");

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const app =  express()
app.use(cors())

app.set("port", process.env.PORT || 3000)
app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`)
})

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
