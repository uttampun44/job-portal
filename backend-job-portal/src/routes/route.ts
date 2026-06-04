import Router from "express";
import AuthRouter from "@routes/Auth/Auth";

const routes = Router();

routes.use("/auth", AuthRouter);

export default routes;
