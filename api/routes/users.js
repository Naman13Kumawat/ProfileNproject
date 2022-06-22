import express from "express";
import { getUser } from "../controllers/user.js";
import {verifyUser} from "../utils/verifyToken.js";

const router = express.Router();

// GET
router.get("/:userID", verifyUser, getUser);

export default router;
