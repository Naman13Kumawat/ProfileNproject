import express from "express";
import { getUser } from "../controllers/user.js";
import {verifyUser} from "../utils/verifyToken.js";

const router = express.Router();

// GET
router.get("/:id", verifyUser, getUser);

export default router;
