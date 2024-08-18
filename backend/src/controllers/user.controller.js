import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const registerUser = asyncHandler(async (req, res) => {
  // get user details from frontend

  const { username, fullName, email, password } = req.body;

  // validation - not empty
  if (
    [fullName, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  // check if user already exist : check email or username
  const existedUser = User.findOne({
    $or: [{ email }, { username }],
  });

  if (existedUser) {
    throw new ApiError(409, "Email or Username already exist");
  }

  // check for images, check for avatar
  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }

  // upload to cloudianry, avatar
  let avatar = await uploadOnCloudinary(avatarLocalPath);
  let coverImage = await uploadOnCloudinary(coverImageLocalPath);

  if (!avatar) {
    throw new ApiError(400, "Avatar file is required");
  }

  // create user object - create entry in db
  let user = await User.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username,
  });

  let createdUser = await User.findById(user?._id).select(
    "-password, -refreshToken"
  );

  // check for user creation
  // remove password and refresh token field from response
  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering user");
  }

  // return res
  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "user register successfully"));
});

export { registerUser };
