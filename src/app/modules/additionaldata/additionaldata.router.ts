import express from "express";
import { AdditionalDataController } from "./additionaldata.controller";

const router = express.Router();

router.post("/:type/create", AdditionalDataController.create);
router.get("/:type", AdditionalDataController.getAll);
router.get("/:type/:id", AdditionalDataController.getById);
router.patch("/:type/:id", AdditionalDataController.updateById);
router.delete("/:type/:id", AdditionalDataController.deleteById);

export const AdditionalDataRoutes = router;
