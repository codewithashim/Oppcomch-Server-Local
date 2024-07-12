"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdditionalDataRoutes = void 0;
const express_1 = __importDefault(require("express"));
const additionaldata_controller_1 = require("./additionaldata.controller");
const router = express_1.default.Router();
router.post("/:type/create", additionaldata_controller_1.AdditionalDataController.create);
router.get("/:type", additionaldata_controller_1.AdditionalDataController.getAll);
router.get("/:type/:id", additionaldata_controller_1.AdditionalDataController.getById);
router.patch("/:type/:id", additionaldata_controller_1.AdditionalDataController.updateById);
router.delete("/:type/:id", additionaldata_controller_1.AdditionalDataController.deleteById);
exports.AdditionalDataRoutes = router;
