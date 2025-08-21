import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
// import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// Dashboard (protected)
router.get("/dashboard", verifyJWT, (req, res) => {
  res.json({ message: `Welcome ${req.user.email}, this is your dashboard.` });
});

// Guest (public)
router.get("/guest", (req, res) => {
  res.json({ message: "This is Guest mode with limited access." });
});

export default router;
