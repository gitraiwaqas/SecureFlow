import { Router } from "express";
import {
  loginUser,
  logoutUser,
  refreshTokenHandler,
} from "../controllers/user.controller.js";

const router = Router();

router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/refresh", refreshTokenHandler);

export default router;
