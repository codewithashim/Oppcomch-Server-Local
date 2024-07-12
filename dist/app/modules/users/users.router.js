"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const users_validation_1 = require("./users.validation");
const users_controller_1 = require("./users.controller");
const router = express_1.default.Router();
router.post("/sign-up", users_controller_1.UserController.createUser);
router.get("/", users_controller_1.UserController.getAllUsers);
router.get("/:id", users_controller_1.UserController.getUserById);
router.patch("/:id", (0, validateRequest_1.default)(users_validation_1.createUserValidator.updateUserZodSchema), users_controller_1.UserController.updateUser);
router.delete("/:id", users_controller_1.UserController.deleteUser);
exports.UserRoutes = router;
