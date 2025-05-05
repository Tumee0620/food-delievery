import { configDotenv } from "dotenv";
import jwt from "jsonWebToken";
configDotenv();
const secret_key = process.env.SECRET_KEY;
export const veryfyToken = (req, res, next) => {
  const header = req.headers.Authorization;
  console.log(req.headers);
  const decode = jwt.decode(token, { secret_key });
  next();
};
