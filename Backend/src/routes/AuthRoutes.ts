import express from "express";
import AuthController from "../controllers/AuthController";

const router = express.Router();
const authController = new AuthController();

router.post("/signup", authController.signUp);
router.post("/signin", authController.signIn);

export default router;