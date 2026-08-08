import { createElement } from "react";
import type { RouteObject } from "react-router";
import Login from "@pages/auth/login/login";
import Register from "@pages/auth/register/register";
import Home from "@pages/home";

export const frontendRoutes: RouteObject[] = [
    {
       path: "/", element: createElement(Home)
    },
    {
       path: "/register", element: createElement(Register)
    },
    {
       path: "/login", element: createElement(Login)
    }
]