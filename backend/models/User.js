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
      enum: ["USER", "PROVIDER"],
      default: "USER"
    },
    company: {
      type: String,
      required: false
    },
    phone: {
      type: String,
      required: false
    },
    address: {
      type: String,
      required: false
    },
    website: {
      type: String,
      required: false
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);
userSchema.plugin(plm, { usernameField: "email" });

module.exports = model("User", userSchema);
