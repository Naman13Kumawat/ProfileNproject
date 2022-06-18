import express from "express";
import { createProject, getProjects, getProject } from "../controllers/project.js";

const router = express.Router();

//CREATE
router.post("/", createProject);

// GET
router.get("/:id", getProject);

//GET ALL
router.get("/", getProjects);

export default router;
