import express from "express";
import { PatientController } from "./patient.controller";

const router = express.Router();

router.post(
  "/create",
  PatientController.createPatient
);

router.get(
  "/get",
  PatientController.getAllPatient
);

router.get(
  "/:id",
  PatientController.getPatientById
);

router.patch(
  "/:id",
  PatientController.updatePatient
);

router.delete(
  "/:id",
  PatientController.deletePatient
);

export const PatientRoutes = router;
