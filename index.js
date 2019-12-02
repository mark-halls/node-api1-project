// implement your API here
const express = require("express");

const db = require("./data/db");

const port = 4000;

const server = express();
server.use(express.json());

server.listen(port, () => console.log(`\n **API running on port ${port}** \n`));
