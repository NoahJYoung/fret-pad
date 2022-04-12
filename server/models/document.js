const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const documentSchema = new Schema(
  {
    user: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      requred: true,
    },
    diagrams: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

const Document = mongoose.model("document", documentSchema);

module.exports = Document;
