import {prisma} from "../lib/prisma.ts";
import bcrypt from "bcrypt";

export async function createUser(email: string, name: string, password: string) {
  try {
     const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.users.create({
      data: { email, name, password: hashedPassword },
    });
    const { password: _pw, ...safeUser } = user;
    return safeUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create user");
  }
}

export async function getUserByEmail({ email }: { email: string }) {
  try {
    const user = await prisma.users.findUnique({
      where: { email },
    });
    return user;
  } catch (error) {
    console.error("Error fetching user by email:", error);
    throw new Error("Failed to fetch user");
  }
}