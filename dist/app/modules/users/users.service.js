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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const users_model_1 = require("./users.model");
const mongoose_1 = __importDefault(require("mongoose"));
const createUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!(payload === null || payload === void 0 ? void 0 : payload.email)) {
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Email is required");
        }
        const existingUser = yield users_model_1.User.findOne({ email: payload.email });
        if (existingUser) {
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "User already exists");
        }
        const user = yield users_model_1.User.create(payload);
        return user;
    }
    catch (error) {
        console.log(error, "error");
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, error.message);
    }
});
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield users_model_1.User.find();
        return users;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, error.message);
    }
});
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Invalid User ID");
        }
        const user = yield users_model_1.User.findById(id);
        if (!user) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "User not found");
        }
        return user;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, error.message);
    }
});
const updateUser = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isExist = yield users_model_1.User.findById(id);
        if (!isExist) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "User not found");
        }
        const { name } = payload, userData = __rest(payload, ["name"]);
        const updatedUserData = Object.assign({}, userData);
        if (name && Object.keys(name).length > 0) {
            Object.keys(name).forEach((key) => {
                const nameKey = `name.${key}`;
                updatedUserData[nameKey] = name[key];
            });
        }
        const result = yield users_model_1.User.findByIdAndUpdate(id, updatedUserData, { new: true });
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, error.message);
    }
});
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield users_model_1.User.findByIdAndDelete(id);
        if (!user) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "User not found");
        }
        return user;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, error.message);
    }
});
exports.UserService = {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    createUser
};
