const express = require("express");

const Books = require("../books/model.js");

const server = express();

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

server.delete("/:id", async (req, res) => {
  const id = req.params.id;

  Books.remove({id})
    .then(books => {
      if (books) {
      res.status(201).json({Message: "That book has been deleted."});
      } else {
        res.status(404);
      }
    })
    .catch(error => {
      res.status(500).json({Error: "That book ID does not exist."});
    });
});

module.exports = server;