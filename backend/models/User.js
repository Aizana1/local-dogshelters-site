import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  myAds: { type: mongoose.Schema.Types.ObjectId, ref: "Pet" }
});

export default mongoose.model("User", userSchema);
