import * as z from "zod";

export const RegisterSchema = z.object({
  email: z.string().email(),
  name: z.string().min(4),
  password: z.string("Password is required" )
              .min(8, "Password must be at least 8 characters long")
              .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
              .regex(/[0-9]/, "Password must contain at least one number")
              .regex(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character")
});