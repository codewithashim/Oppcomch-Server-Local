import { Schema, model } from "mongoose";
import config from "../../../config";
import bcrypt from "bcrypt";
import { IUser, IUserMethods, UserModel } from "./users.interface";
import { ENUM_USER_ROLE } from "../../../enums/user";

const userSchema = new Schema<IUser, Record<string, never>, IUserMethods>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: Object.values(ENUM_USER_ROLE),
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
    needsPasswordChange: {
      type: Boolean,
      default: false,
    },
    passwordChangeAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.methods.isUserExist = async function (
  email: string
): Promise<Partial<IUser> | null> {
  const user = await User.findOne(
    { email },
    {
      role: 1,
      email: 1,
      name: 1,
      phone: 1,
    }
  );

  return user;
};

userSchema.methods.isPasswordMatched = async function (
  givenPassword: string,
  savedPassword: string
): Promise<boolean> {
  const isPasswordMatched = await bcrypt.compare(givenPassword, savedPassword);
  return isPasswordMatched;
};

userSchema.pre("save", async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_round)
  );

  if (!user.needsPasswordChange) {
    this.passwordChangeAt = new Date();
  }

  next();
});

export const User = model<IUser, UserModel>("User", userSchema);
