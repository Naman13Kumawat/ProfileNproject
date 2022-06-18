import express from "express";
import { createUser, getUsers, getUser } from "../controllers/user.js";

const router = express.Router();

//CREATE
router.post("/", createUser);

// GET
router.get("/:id", getUser);

//GET ALL
router.get("/", getUsers);

export default router;
