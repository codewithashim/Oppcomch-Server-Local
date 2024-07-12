import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { IUser } from "./users.interface";
import { User } from "./users.model";
import mongoose from "mongoose";

const createUser = async (payload: IUser): Promise<IUser | null> => {
  try {
    if (!payload?.email) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Email is required");
    }

    const existingUser = await User.findOne({ email: payload.email });
    if (existingUser) {
      throw new ApiError(httpStatus.BAD_REQUEST, "User already exists");
    }

    const user = await User.create(payload);
    return user;
  } catch (error: any) {
    console.log(error, "error");
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};


const getAllUsers = async (): Promise<Array<IUser>> => {
  try {
    const users = await User.find();
    return users;
  } catch (error: any) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

const getUserById = async (id: string): Promise<IUser | null> => {
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Invalid User ID");
    }

    const user = await User.findById(id);
    if (!user) {
      throw new ApiError(httpStatus.NOT_FOUND, "User not found");
    }
    return user;
  } catch (error: any) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

const updateUser = async (
  id: string,
  payload: Partial<IUser>
): Promise<IUser | null> => {
  try {
    const isExist = await User.findById(id);
    if (!isExist) {
      throw new ApiError(httpStatus.NOT_FOUND, "User not found");
    }

    const { name, ...userData } = payload;
    const updatedUserData: Partial<IUser> = { ...userData };

    if (name && Object.keys(name).length > 0) {
      Object.keys(name).forEach((key) => {
        const nameKey = `name.${key}`;
        (updatedUserData as any)[nameKey] = name[key as keyof typeof name];
      });
    }

    const result = await User.findByIdAndUpdate(id, updatedUserData, { new: true });
    return result;
  } catch (error: any) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

const deleteUser = async (id: string): Promise<IUser | null> => {
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      throw new ApiError(httpStatus.NOT_FOUND, "User not found");
    }
    return user;
  } catch (error: any) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

export const UserService = {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  createUser
};
