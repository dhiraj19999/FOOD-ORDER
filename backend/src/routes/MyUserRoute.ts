import express from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck } from "../middelware/auth";
const router = express.Router();

router.post("/", jwtCheck, MyUserController.createCurrentUser);

export default router;
