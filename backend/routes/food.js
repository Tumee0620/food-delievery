import express from "express";

import {
  createFood,
  deleteFood,
  getFood,
  getFoodById,
  updateFood,
  getFoodByCategoryId,
} from "../controller/food.js";
import { veryfyToken } from "../middleware/auth.js";

export const FoodRouter = express.Router();

FoodRouter.post("/", createFood)
  .get("/", veryfyToken, getFood)
  .get("/:id", getFoodById)
  .delete("/:id", deleteFood)
  .put("/:id", updateFood)
  .get("/:id", getFoodByCategoryId);
