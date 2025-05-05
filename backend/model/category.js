import mongoose from "mongoose";
import { stringify } from "uuid";

const CatergorySchema = new mongoose.Schema({
  name: { type: String, min: 8 },
  createdAt: { type: Date, default: Date.now, required: true },
  updatedAt: { type: Date, default: Date.now, required: true },
});

const categoryModel = mongoose.model("category", CatergorySchema);

export default categoryModel;
