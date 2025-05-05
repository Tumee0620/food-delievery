import mongoose, { Schema } from "mongoose";

const foodSchema = new mongoose.Schema({
  foodname: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  categories: { type: Schema.Types.ObjectId, ref: "category" },
  isVerified: { type: Boolean, default: false, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
  updatedAt: { type: Date, default: Date.now, required: true },
});

const foodModel = mongoose.model("food", foodSchema);

export default foodModel;
