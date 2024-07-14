"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../../../config"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const jwtHelper_1 = require("../../../helpers/jwtHelper");
const users_model_1 = require("../users/users.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    const user = yield users_model_1.User.findOne({ email }).select("+password");
    if (!user) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "User not found");
    }
    // check password
    const isPasswordMatched = yield bcrypt_1.default.compare(password, user.password);
    if (!isPasswordMatched) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, "Incorrect password");
    }
    const { role, name, phone } = user;
    const accessToken = jwtHelper_1.jwtHelper.createToken({
        role,
        name,
        email,
        phone,
    }, config_1.default.jwt.secret, config_1.default.jwt.expiresIn);
    const refreshToken = jwtHelper_1.jwtHelper.createToken({
        role,
        name,
        email,
        phone,
    }, config_1.default.jwt.refresh_secret, config_1.default.jwt.refresh_expires);
    const userDetail = {
        name,
        email,
        phone,
        role,
    };
    return {
        accessToken,
        refreshToken,
        needsPasswordChange: user.needsPasswordChange,
        userDetail,
    };
});
const refreshToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    // verify the refresh token
    let verifiedToken = null;
    try {
        verifiedToken = jwtHelper_1.jwtHelper.verifyToken(token, config_1.default.jwt.refresh_secret);
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, "Invalid refresh token");
    }
    const { userId, role, name, email, phone } = verifiedToken;
    const user = new users_model_1.User();
    const isUserExist = yield user.isUserExist(email);
    if (!isUserExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "User not found");
    }
    if (role !== "admin") {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, "Forbidden");
    }
    // create access token and refresh token
    const newAccessToken = jwtHelper_1.jwtHelper.createToken({
        userId,
        role,
        name,
        email,
        phone,
    }, config_1.default.jwt.secret, config_1.default.jwt.expiresIn);
    return {
        accessToken: newAccessToken,
    };
});
const changePassword = (user, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { oldPassword, newPassword } = payload;
    // Find the user by id
    const isUserExist = yield users_model_1.User.findOne({ id: user === null || user === void 0 ? void 0 : user.userId }).select("+password");
    if (!isUserExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "User does not exist");
    }
    // Checking old password
    const isPasswordMatched = yield isUserExist.isPasswordMatched(oldPassword, isUserExist.password);
    if (!isPasswordMatched) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, "Old Password is incorrect");
    }
    // Update password
    isUserExist.password = newPassword;
    isUserExist.needsPasswordChange = false;
    yield isUserExist.save();
});
exports.AuthService = {
    loginUser,
    refreshToken,
    changePassword,
};
