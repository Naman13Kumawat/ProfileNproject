import User from "../models/user.js";
import { createError } from "../utils/error.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    return next(createError(409, "User already exist"));
  } else {
    try {
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(req.body.password, salt);

      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash,
        mobileNumber: req.body.mobileNumber,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        companyName: req.body.companyName,
        occupation: req.body.occupation,
        experience: req.body.experience,
      });

      await newUser.save();
      res.status(200).send("User created successfully!");
    } catch (err) {
      next(err);
    }
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(createError(404, "User not found"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong Password/Username"));

    const token = jwt.sign({ id: user._id }, process.env.JWT);

    const { password, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ ...otherDetails });
  } catch (err) {
    next(err);
  }
};

export const logout = (req, res, next) => {
  try {
    res.clearCookie("access_token");
    res.status(200).send("Cookie deleted successfully");
  } catch (err) {
    next(err);
  }
};
