import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    require: [true, "Name is Required"],
  },
  email: {
    type: String,
    require: [true, "Email is Reuired"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "Password Is Requried"],
  },
  about: String,
  profileUrl: String,
});

export const User =
  mongoose.models.users || mongoose.model("users", userSchema);
