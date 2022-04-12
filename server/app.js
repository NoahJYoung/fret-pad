const express = require("express");
const path = require("path");
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
const dbURI =
  "mongodb+srv://FretPadUser:noah92@fret-pad-cluster.ukxyo.mongodb.net/fret-pad?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT))
  .catch((err) => console.log(err));

//ROUTER

app.get("/", (req, res) => {
  res.send("");
});

app.post("/login", (req, res) => {
  const loginQuery = User.findOne({
    email: req.body.email,
    password: req.body.password,
  })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

app.post("/new-user", (req, res) => {
  const user = new User({
    email: req.body.email,
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

app.post("/save-doc", (req, res) => {
  const doc = new Document({
    user: req.body.document.user.email,
    title: req.body.document.title,
    diagrams: req.body.document.diagrams,
  });
  doc.save();
  const user = User.findOne({ email: req.body.document.user.email })
    .then((user) => {
      user.documents.push(doc);
      user.save().then((result) => {
        res.send(result);
      });
    })
    .catch((err) => console.log(err));
});
