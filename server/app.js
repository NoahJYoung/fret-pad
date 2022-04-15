const express = require("express");
const path = require("path");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const Document = require("./models/document");
const User = require("./models/user");

const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
    origin: "*",
  })
);

const PORT = 9000;
//MONGOOSE
const dbURI = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@fret-pad-cluster.ukxyo.mongodb.net/fret-pad?retryWrites=true&w=majority`;

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT))
  .catch((err) => console.log(err));

//ROUTER

app.get("/", (req, res) => {
  res.send("");
});

//LOGIN ROUTER

app.post("/login", (req, res) => {
  User.findOne({
    email: req.body.email,
    password: req.body.password,
  })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

//ACOUNT CREATION

app.post("/new-user", (req, res) => {
  const user = new User({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    documents: [],
  });
  user
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

//SHOW ALL DOCUMENTS

app.get("/documents", (req, res) => {
  const email = req.query.email;
  const user = User.find({ email: email })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

//UPDATE DOCUMENT

app.patch("/save-doc", (req, res) => {
  User.findOne({ _id: req.body.user.id }).then((user) => {
    user.documents.id(req.body.documentId).set({
      user: req.body.user.username,
      title: req.body.title,
      diagrams: req.body.diagrams,
    });
    user
      .save()
      .then((result) => res.json(result))
      .catch((err) => {
        console.log(err);
      });
  });
});

//SAVE NEW DOCUMENT

app.post("/save-doc", (req, res) => {
  const doc = new Document({
    user: req.body.user.username,
    title: req.body.title,
    diagrams: req.body.diagrams,
  });

  User.findOne({ email: req.body.user.email }).then((user) => {
    user.documents.push(doc);
    user
      .save()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

//DELETE DOCUMENT

app.delete("/documents", (req, res) => {
  User.findOne({ id: req.query.user.id }).then((user) => {
    user.documents.id(req.query.documentId).remove();
    user
      .save()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
