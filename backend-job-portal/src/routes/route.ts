import Router from "express";
import AuthRouter from "@routes/Auth/auth.ts";

const routes = Router();

routes.use("/auth", AuthRouter);

export default routes;
