import express, { Request, Response } from "express";
import myUserRoute from "./routes/MyUserRoute";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connected to database"));
const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/my/user", myUserRoute);

app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "hello" });
});

app.listen(7000, () => {
  console.log("server startted");
});
