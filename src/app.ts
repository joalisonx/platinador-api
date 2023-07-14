import express from "express";
import logger from "morgan";
import { index } from "./routes/index";

export const app = express();
app.set("port", 3001);
app.use("/", index);
app.use(logger("dev"));