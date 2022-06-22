import express from "express";
import { createProject, getProjects, getProject } from "../controllers/project.js";
import {verifyUser} from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/:userEmail",verifyUser, createProject);

// GET
router.get("/:userEmail/:id",verifyUser, getProject);

//GET ALL
router.get("/:userEmail",verifyUser, getProjects);

export default router;
