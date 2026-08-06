import { createBrowserRouter } from "react-router";
import {frontendRoutes} from "@routes/frontend.route";
import {backendRoutes} from "@routes/backend.route";

export const routes = createBrowserRouter([
    ...frontendRoutes,
    ...backendRoutes,
])