import Project from "../models/project.js"

export const createProject = async (req, res, next)=>{
    const newProject = new Project(req.body);

    try{
        const savedProject = await newProject.save();
        res.status(200).json(savedProject);
    } catch(err){
        next(err);
    }
}

export const getProject = async (req, res, next)=>{
    try{
        const project = await Project.findById(req.params.id);
        res.status(200).json(project);
    }catch(err){
        next(err);
    }
};

export const getProjects = async (req, res, next)=>{
    try{
        const projects = await Project.find();
        res.status(200).json(projects);
    }catch(err){
        next(err);
    }
};