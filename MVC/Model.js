const mongoose = require("mongoose");

const dataStructure = mongoose.Schema({
  conutry: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
    unique: true,
  },
  rating: {
    type: Number,
    unique: true,
  },
});

module.exports = mongoose.model("monies", dataStructure);
