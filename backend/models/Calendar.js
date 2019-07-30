const { Schema, model } = require("mongoose");

const calendarSchema = new Schema(
  {
    month: {
      type: String,
      required: true
    },
    day: {
      type: String,
      required: true
    },
    year: {
      type: String,
      required: true
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: "Post"
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("Calendar", calendarSchema);
