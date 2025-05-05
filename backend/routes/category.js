import express from "express";

import {} from "../controller/user.js";
import {
  createCategory,
  deleteCategory,
  getCategory,
  getCategoryById,
  updateCategory,
} from "../controller/category.js";

export const categoryRouter = express.Router();

categoryRouter
  .post("/", createCategory)
  .get("/", getCategory)
  .get("/:id", getCategoryById)
  .delete("/:id", deleteCategory)
  .put("/:id", updateCategory);
