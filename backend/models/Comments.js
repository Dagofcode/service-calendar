const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    body: {
      type: String,
      required: true
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: "Post"
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "USER"
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);
module.exports = model("Comment", commentSchema);
