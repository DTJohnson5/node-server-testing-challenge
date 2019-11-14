const express = require("express");

const Books = require("../books/bookModel.js");

const server = express;

server.use(express.json());

server.get("/", (req, res) => {
  Books.getAll()
    .then(books => {
      res.status(200).json(books);
    })
    .catch(error => {
      res.status(500).json({Error: "The books were unable to be retrieved."});
    });
});

server.delete("/:id", (req, res) => {
  Books.delete(id)
    .then(books => {
      res.status(201).json({Message: "That book has been deleted."});
    })
    .catch(error => {
      res.status(500).json({Error: "That book ID does not exist."});
    });
});

module.exports = server;