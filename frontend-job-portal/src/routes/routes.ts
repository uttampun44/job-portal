import { createBrowserRouter } from "react-router";
import {frontendRoutes} from "@routes/frontend.route";
import {backendRoutes} from "@routes/backend.route";

 const Routes = createBrowserRouter([
    ...frontendRoutes,
    ...backendRoutes,
])

export default Routes;