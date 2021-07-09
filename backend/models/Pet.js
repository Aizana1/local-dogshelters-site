import mongoose from "mongoose";
const Schema = mongoose.Schema;

const petSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  image: { type: String, required: false },
  alt: { type: String, required: true },
  gender: { type: String, required: true },
  breed: { type: String, required: true },
  age: { type: Number, required: true },
  description: { type:String , required: true },
  phone: {type: Number, required: true},
  picture: {type: String, required: true},
});

export default mongoose.model('Pet', petSchema)
