import mongoose, { Schema } from "mongoose";
import { stringify } from "uuid";

const FoodOrderItemSchema = new mongoose.Schema(
  {
    quantity: { type: Number, required: true },
    food: { type: Schema.Types.ObjectId, ref: "food", required: true },
  },
  { _id: false }
);
const FoodOrderSchema = new mongoose.Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "user" },

    totalPrice: { type: Number, required: true },
    foodOrderItems: { type: [FoodOrderItemSchema], required: true },
    status: {
      type: String,
      enum: ["PENDING", "CANCELED", "DELIEVERED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);
export const foodOrderModel = mongoose.model("foodOrder", FoodOrderSchema);
