const { Schema, model } = require("mongoose");
const plm = require("passport-local-mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER"
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);
userSchema.plugin(plm, { usernameField: "email" });

module.exports = model("User", userSchema);
