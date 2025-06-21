import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { DB_NAME } from "./constants.js";

dotenv.config({
    path: "./env"
})

connectDB();