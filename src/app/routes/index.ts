import express from "express";
import { UserRoutes } from "../modules/users/users.router";
import { AuthRoutes } from "../modules/auth/auth.route";
import { PatientRoutes } from "../modules/patient/patient.router";
import { AdditionalDataRoutes } from "../modules/additionaldata/additionaldata.router";

const router = express.Router();

const moduleRoutes: any[] = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path:"/patient",
    route: PatientRoutes
  },
  {
    path:"/additional-data",
    route: AdditionalDataRoutes
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
