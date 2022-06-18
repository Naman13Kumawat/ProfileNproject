import express from "express";
import { createProject, getProjects, getProject } from "../controllers/project.js";
import {verifyUser} from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/",verifyUser, createProject);

// GET
router.get("/:id",verifyUser, getProject);

//GET ALL
router.get("/",verifyUser, getProjects);

export default router;
