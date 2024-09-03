const { ObjectId } = require("mongodb");
const { db } = require("../db");
const { Error, ApiError } = require("../utils/ApiError");
const { ApiResponse } = require("../utils/ApiResponse");

const userCollection = db.collection("user");

const createUser = async (req, res) => {
  try {
    const body = req.body;

    const existUser = await userCollection.findOne({
      $or: [{ email: body.email }, { fullname: body.fullname }],
    });

    if (existUser) {
      ApiError(res, 400, "User already exist");
    } else {
      const user = await userCollection.insertOne(body);

      if (user.acknowledged) {
        let data = { ...body, _id: user.insertedId };
        ApiResponse(res, 201, data);
      } else {
        ApiError(res, 500, "Failed to insert user");
      }
    }
  } catch (error) {
    let errorMessage = error.message;
    ApiError(res, 500, errorMessage);
  }
};

const updateUser = async (req, res) => {
  try {
    let id = req.body._id;
    delete req.body._id;
    let body = req.body;

    const updatedUser = await userCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: body }
    );

    if (updatedUser.acknowledged) {
      const data = { ...body, _id: id };
      ApiResponse(res, 201, data);
    } else {
      ApiError(res, 500, "Failed to update user");
    }
  } catch (error) {
    let errorMessage = error.message;
    ApiError(res, 500, errorMessage);
  }
};

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await userCollection.deleteOne({
      _id: new ObjectId(req.body._id),
    });

    if (deletedUser.acknowledged) {
      let message = {
        message: "User deleted successfully",
        count: deletedUser.deletedCount,
      };
      ApiResponse(res, 200, message);
    } else {
      ApiError(res, 500, "Failed to delete user");
    }
  } catch (error) {
    let errorMessage = error.message;
    ApiError(res, 500, errorMessage);
  }
};

const deleteAllUser = async (req, res) => {
  try {
    const deletedUser = await userCollection.deleteMany({});
    if (deletedUser.acknowledged) {
      let message = {
        message: "User deleted successfully",
        count: deletedUser.deletedCount,
      };
      ApiResponse(res, 200, message);
    } else {
      ApiError(res, 500, "Failed to delete user");
    }
  } catch (error) {
    let errorMessage = error.message;
    ApiError(res, 500, errorMessage);
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userCollection.find({}).toArray();
    if (users.acknowledged) {
      ApiResponse(res, 200, users);
    } else {
      ApiError(res, 500, "Failed to get user");
    }
  } catch (error) {
    let errorMessage = error.message;
    ApiError(res, 500, errorMessage);
  }
};

const getUserById = async (req, res) => {
  try {
    let id = req.params.id;
    let user = await userCollection.findOne({ _id: new ObjectId(id) });
    if (user.acknowledged) {
      ApiResponse(res, 200, user);
    } else {
      ApiError(res, 500, "Failed to get user");
    }
  } catch (error) {
    let errorMessage = error.message;
    ApiError(res, 500, errorMessage);
  }
};

const findUser = async (req, res) => {
  try {
    let search = req.query.search;

    let query = {
      $or: [
        { fullname: { $regex: search, $options: "i" } },
        { password: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ],
    };

    const users = await userCollection.find(query).toArray();
    if (users.acknowledged) {
      ApiResponse(res, 200, users);
    } else {
      ApiError(res, 500, "Failed to find user");
    }
  } catch (error) {
    let errorMessage = error.message;
    ApiError(res, 500, errorMessage);
  }
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  deleteAllUser,
  getUsers,
  getUserById,
  findUser,
};
