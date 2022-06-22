import User from "../models/user.js"

export const getUser = async (req, res, next)=>{
    try{
        const user = await User.findById(req.params.userID);
        res.status(200).json(user);
    }catch(err){
        next(err);
    }
};