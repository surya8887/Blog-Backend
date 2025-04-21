import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import User from "../models/user.model.js";

const signup = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if ([name, email, password].some((field) => !field?.trim())) {
        throw new ApiError(400, "All fields are required");
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new ApiError(409, "User with this email already exists");
    }

    const user = await User.create({ name, email, password });

    const createdUser = await User.findById(user._id).select("-password -refreshToken");
    if (!createdUser) {
        throw new ApiError(500, "Something went wrong during signup");
    }

    const response = new ApiResponse(201, createdUser, "User signed up successfully");
    return res.status(response.statusCode).json(response.toJSON());
});

// update profile and add the Bio and Cover Image and Avatar
/*
const  ProfileUpdate = asyncHandler(async (req,res) => {
    const  bio = req.body
    console.log(bio);
    
})
*/ 


export {signup};
