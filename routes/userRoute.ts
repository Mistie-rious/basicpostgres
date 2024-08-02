import express from "express";
import { Request, Response } from "express";
const router = express.Router();
import { validateData } from "../middleware/validationMiddleware";
import { userRegistrationSchema, userLoginSchema } from "../schemas/userSchema";
import { registerUser, loginUser } from "../controllers/userController";

router.post('/register', validateData(userRegistrationSchema), registerUser);
router.post('/login', validateData(userLoginSchema), loginUser);

  export default router;