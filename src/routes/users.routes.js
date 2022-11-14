import { request, Router } from "express";
import * as userController from "../controllers/users.controller";

const router = Router();

router.get("/", userController.getUsers);
router.get("/:documento", userController.getUser);
router.post("/", userController.postUser);
router.delete("/:documento", userController.deleteUser);
router.put("/:documento", userController.putUser);

export default router;

