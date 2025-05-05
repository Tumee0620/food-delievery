import express from "express";

import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../controller/user.js";

export const usersRouter = express.Router();

usersRouter
  .post("/", createUser)
  .get("/", getUsers)
  .get("/:id", getUserById)
  .delete("/:id", deleteUser)
  .put("/:id", updateUser);
