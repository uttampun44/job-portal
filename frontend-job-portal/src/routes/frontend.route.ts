import { createElement } from "react";
import type { RouteObject } from "react-router";
import Login from "@pages/auth/login/login";
import Register from "@pages/auth/register/register";

export const frontendRoutes: RouteObject[] = [
    {
       path: "/register", element: createElement(Register)
    },
    {
       path: "/login", element: createElement(Login)
    }
]