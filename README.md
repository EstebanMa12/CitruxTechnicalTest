# CITRUX TECHNICAL TEST

This project leverages the ChatGPT API and the Cheerio library to generate summaries of URLs provided to it. It aims to simplify the process of extracting relevant information from web pages, enhancing accessibility and ease of information retrieval.

## Installation 
To install the project dependencies, ensure you have Yarn installed and follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run yarn to install all dependencies

Important: Ensure you have Node.js version >18.17 installed on your system.

## Usage

1. Create a `.env` file in the project directory.
2. Inside the `.env` file, set the `VITE_API_URL` variable to the desired API backend route. For practical purposes, the default value is:

```bash 
  VITE_API_URL = http://localhost:4000/api/v1
```
It's important to prefix `VITE_` to the variable name for proper usage.

3. Run the development server with the following command:

```bash
yarn dev
```

4. Navigate to [http://localhost:5173](http://localhost:5173) in your browser to view the project.

## Features

1. The project has a simple UI that allows users to input URLs for summarization.
2. The project leverages the ChatGPT API to generate summaries of the provided URLs.
3. The project uses Cheerio to extract relevant information from the web pages.
4. The project shows the history chats and you can eliminate each one

## Technologies Used

1. [React](https://reactjs.org/)
2. [TypeScript](https://www.typescriptlang.org/)
3. [SASS](https://https://sass-lang.com//)
4. [Vite](https://vitejs.dev/)
5. [Cheerio](https://cheerio.js.org/)
6. [ChatGPT API](https://beta.openai.com/docs/)

## Contributors
1. [Esteban Maya](www.linkedin.com/in/estebanmaya-fullstackdeveloper)