// import express from 'express';
// // import cors from "cors";
// // const api = require("./api/index").default;

// const app = express();
// const port = '3000';

// // app.get('/', (req, res) => {
// //   res.send('TO DO LIST 🖌');
// // });

// // app.use("/api", api);

// // app.use(cors());
// const router = require('./api/to-do-list-router')
// app.use(express.json())

// app.use(router.get)

// app.listen(port, () => {
//   console.log(`:D Server is running at http://localhost:${port}`);
// });

import express from "express";

import router from "./routes";

const app = express()

app.use(express.json())

app.use(router)

app.get("/", (req, res) => {
  res.status(200).send("Hii there")
})

app.listen("3005", ()=>console.log("server runs in 3005"))