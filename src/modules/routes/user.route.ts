import {Router} from "express";
import { register, login, getUserById } from "../meeting/index/user.controller.js";
import { InputValidation } from "../middlewares/InputValidation.middleware.js";

const router = Router();

router.post("/register",InputValidation,register);
router.post("/login",InputValidation,login);
router.get("/:id",getUserById);

export default router;