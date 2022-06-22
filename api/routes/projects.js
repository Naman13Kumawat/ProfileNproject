import express from "express";
import { createProject, getProjects, getProject } from "../controllers/project.js";
import {verifyUser} from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/:userID",verifyUser, createProject);

// GET
router.get("/:userID/:id",verifyUser, getProject);

//GET ALL
router.get("/:userID",verifyUser, getProjects);

export default router;
