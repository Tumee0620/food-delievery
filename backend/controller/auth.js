import UserModel from "../model/user.js";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
import bcrypt from "bcrypt";
configDotenv();
const secret_key = process.env.SECRET_KEY;

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email: email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not fount",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({
        success: "false",
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign({ ...user }, secret_key, { expiresIn: 3600 });

    return res.status(200).send({
      success: true,
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
};
