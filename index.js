const { client } = require("./db");
client.connect();

const PORT = 3000;
const express = require("express");
const server = express();
server.listen(PORT, () => {
  console.log("Server Online on port", PORT);
});

const morgan = require("morgan");
server.use(morgan("dev"));

server.use(express.json());

const apiRouter = require("./api");
server.use("/api", apiRouter);
