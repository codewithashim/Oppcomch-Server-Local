import httpStatus from "http-status";
import { JwtPayload, Secret } from "jsonwebtoken";
import config from "../../../config";
import ApiError from "../../../errors/ApiError";
import { jwtHelper } from "../../../helpers/jwtHelper";
import {
  IChangePassword,
  ILoginUser,
  ILoginUserResponse,
  IRefreshTokenResponse,
} from "./auth.interface";
import { User } from "../users/users.model";

const loginUser = async (payload: ILoginUser): Promise<ILoginUserResponse> => {
  const { email, password } = payload;

  const user = new User();

  const isUserExist = await user.isUserExist(email);
  
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }

  // check password
  if (
    isUserExist.password &&
    !user.isPasswordMatched(password, isUserExist?.password)
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Incorrect password");
  }

  // create access token and refresh token
  const { role, name, phone } = isUserExist;

  const accessToken = jwtHelper.createToken(
    {
      role,
      name,
      email,
      phone,
    },
    config.jwt.secret as Secret,
    config.jwt.expiresIn as string
  );

  const refreshToken = jwtHelper.createToken(
    {
      role,
      name,
      email,
      phone,
    },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires as string
  );

  const userDetail: any = {
    name,
    email,
    phone,
  };

  return {
    accessToken,
    refreshToken,
    needsPasswordChange: isUserExist.needsPasswordChange,
    userDetail,
  };
};

const refreshToken = async (token: string): Promise<IRefreshTokenResponse> => {
  // verify the refresh token
  let verifiedToken = null;

  try {
    verifiedToken = jwtHelper.verifyToken(
      token,
      config.jwt.refresh_secret as Secret
    );
  } catch (error) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Invalid refresh token");
  }

  const { userId, role, name, email, phone } = verifiedToken;
  const user = new User();
  const isUserExist = await user.isUserExist(email);
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }

  if (role !== "admin") {
    throw new ApiError(httpStatus.FORBIDDEN, "Forbidden");
  }

  // create access token and refresh token
  const newAccessToken = jwtHelper.createToken(
    {
      userId,
      role,
      name,
      email,
      phone,
    },
    config.jwt.secret as Secret,
    config.jwt.expiresIn as string
  );

  return {
    accessToken: newAccessToken,
  };
};

const changePassword = async (
  user: JwtPayload | null,
  payload: IChangePassword
): Promise<void> => {
  const { oldPassword, newPassword } = payload;

  // Find the user by id
  const isUserExist = await User.findOne({ id: user?.userId }).select(
    "+password"
  );

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "User does not exist");
  }

  // Checking old password
  const isPasswordMatched = await isUserExist.isPasswordMatched(
    oldPassword,
    isUserExist.password
  );

  if (!isPasswordMatched) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Old Password is incorrect");
  }

  // Update password
  isUserExist.password = newPassword;
  isUserExist.needsPasswordChange = false;
  await isUserExist.save();
};

export const AuthService = {
  loginUser,
  refreshToken,
  changePassword,
};
