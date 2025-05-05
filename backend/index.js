import express, { json } from "express";
import connectMongoDB from "./connectDb.js";
import { usersRouter } from "./routes/user.js";
import cors from "cors";
import dotenv from "dotenv";
import { categoryRouter } from "./routes/category.js";
import { FoodRouter } from "./routes/food.js";
import { foodOrderRouter } from "./routes/food-order.js";
import { authRouter } from "./routes/auth.js";

const port = 8000;
const app = express();

connectMongoDB();
app.use(cors());
app.use(json());
app.use("/", authRouter);
app.use("/user", usersRouter);
app.use("/category", categoryRouter);
app.use("/food", FoodRouter);
app.use("/food-order", foodOrderRouter);
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
