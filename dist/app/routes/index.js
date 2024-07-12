"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_router_1 = require("../modules/users/users.router");
const auth_route_1 = require("../modules/auth/auth.route");
const patient_router_1 = require("../modules/patient/patient.router");
const additionaldata_router_1 = require("../modules/additionaldata/additionaldata.router");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/users",
        route: users_router_1.UserRoutes,
    },
    {
        path: "/auth",
        route: auth_route_1.AuthRoutes,
    },
    {
        path: "/patient",
        route: patient_router_1.PatientRoutes
    },
    {
        path: "/additional-data",
        route: additionaldata_router_1.AdditionalDataRoutes
    }
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
