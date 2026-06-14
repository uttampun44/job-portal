import { Router } from "express";
import { RegisterController } from "@controllers/auth/register.ts";

const AuthRouter = Router()
AuthRouter.post("/register", RegisterController)

export default AuthRouter;