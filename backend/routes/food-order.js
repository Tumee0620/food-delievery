import express from "express";
import {
  createFoodOrder,
  deleteFoodOrder,
  getFoodOrder,
  getFoodOrderById,
  updateFoodOrder,
} from "../controller/food-order.js";

export const foodOrderRouter = express.Router();

foodOrderRouter
  .post("/", createFoodOrder)
  .get("/", getFoodOrder)
  .get("/:id", getFoodOrderById)
  .delete("/:id", deleteFoodOrder)
  .put("/:id", updateFoodOrder);
