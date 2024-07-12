import { Model } from "mongoose";
import { ENUM_USER_ROLE } from "../../../enums/user";

export type IUser = {
  name: any;
  email: string;
  phone: string;
  role: ENUM_USER_ROLE;
  password: string;
  passwordChangeAt?: Date;
  needsPasswordChange: true | false;
};

export type IUserMethods = {
  isUserExist(email: string): Promise<Partial<IUser> | null>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
};

export type UserModel = Model<IUser, Record<string, unknown>, IUserMethods>;
