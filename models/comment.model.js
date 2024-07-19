const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  comment: String,
});

const commentModel = mongoose.model("comment", commentSchema);

module.exports = commentModel;
