const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "USER"
    },
    date: {
      type: String,
      required: true
    },
    photo: {
      type: String,
      required: false
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("Post", postSchema);
