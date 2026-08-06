import { GraphQLError } from "graphql";
import {prisma} from "../lib/prisma.ts";
import bcrypt from "bcrypt";

export async function createUser(email: string, name: string, password: string, confirmPassword: string) {
  try {
    if (password !== confirmPassword) {
      throw new GraphQLError("Passwords do not match", {
        extensions: {
          code: "PASSWORDS_DO_NOT_MATCH",
        },
      });
    }

    const existingUser = await prisma.users.findUnique({where: { email },});
    
    if (existingUser) {
      throw new GraphQLError("User with this email already exists", {
        extensions: {
          code: "USER_ALREADY_EXISTS",
        },
      });
    }

     const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.users.create({
      data: { email, name, password: hashedPassword },
    });
    const { password: _pw, ...safeUser } = user;
    return safeUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error instanceof Error ? error : new Error("An unexpected error occurred while creating the user");
  }
}


export async function loginUser(email: string, password: string) {
  try {
    const user = await prisma.users.findUnique({ where: { email } });
     
  if (!user) {
      throw new GraphQLError("User not found", {
        extensions: {
          code: "USER_NOT_FOUND",
        },
      });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      throw new GraphQLError("Invalid password", {
        extensions: {
          code: "INVALID_PASSWORD",
        },
      });
    }

    const { password: _pw, ...safeUser } = user;
    return safeUser;

  }
  catch (error) {
    console.error("Error logging in user:", error);
    throw error instanceof Error ? error : new Error("An unexpected error occurred while logging in the user");
  }
}