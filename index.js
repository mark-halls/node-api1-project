// implement your API here
const express = require("express");

const db = require("./data/db");

const port = 4000;

const server = express();
server.use(express.json());

// get users at /api/users
server.get(`/api/users`, (req, res) => {
  db.find()
    .then(user => res.status(200).json(user))
    .catch(err => {
      console.error(`error on GET /api/users`, err);
      res.status(500).json({
        errorMessage: `error getting list of users from the database`
      });
    });
});

// get user by id at at /api/users/:id
server.get(`/api/users/:id`, (req, res) => {});

// add new user at /api/users
server.post(`/api/users`, (req, res) => {});

// delete user by id at /api/users/:id
server.delete(`/api/users/:id`, (req, res) => {});

// update user at /api/users/:id
server.put(`/api/users/:id`, (req, res) => {});

server.listen(port, () => console.log(`\n **API running on port ${port}** \n`));
