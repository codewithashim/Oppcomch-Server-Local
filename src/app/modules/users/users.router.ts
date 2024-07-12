import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { createUserValidator } from './users.validation';
import { UserController } from './users.controller';
const router = express.Router();

router.post("/sign-up", UserController.createUser);
router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById);
router.patch(
  "/:id",
  validateRequest(createUserValidator.updateUserZodSchema),
  UserController.updateUser
);
router.delete("/:id", UserController.deleteUser);


export const UserRoutes = router;
