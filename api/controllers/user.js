import User from "../models/user.js"

export const createUser = async (req, res, next)=>{
    const newUser = new User(req.body);

    try{
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch(err){
        next(err);
    }
}

export const getUser = async (req, res, next)=>{
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    }catch(err){
        next(err);
    }
};

export const getUsers = async (req, res, next)=>{
    try{
        const users = await User.find();
        res.status(200).json(users);
    }catch(err){
        next(err);
    }
};