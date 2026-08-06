import type { RouteObject } from "react-router";
import  {Register} from "../../src/page/auth/register/register";

export const frontendRoutes: RouteObject[] = [
    {
       path: "/register", element:  <Register />
    }
]