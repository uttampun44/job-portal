import {createUser, getUserByEmail} from "@services/users.service";
import { RegisterSchema } from "@controllers/auth/auth";
import {type Request, type Response} from "express";
import bycrypt from "bcrypt";

export async function RegisterController(req: Request, res: Response) {

    try {
          const { email, name, password } = req.body;
   
    const validation = RegisterSchema.safeParse({ email, name, password });
  
     if (!validation.success) {
         return res.status(400).json({ message: "Invalid input", errors: validation.error });
     }
 
  const checkUserExists = await getUserByEmail({ email });

  if (checkUserExists) {
    return res.status(400).json({ message: "Email already in use" });
  }
    
  const hashedPassword = await bycrypt.hash(password, 10);
 const user = await createUser(email, name, hashedPassword);

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    });


    }catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ message: "Failed to create user" });
    }
}