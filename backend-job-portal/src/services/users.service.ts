import {prisma} from "../lib/prisma.js";

export async function createUser(email: string, name: string, password: string) {
  try {
    const user = await (prisma as any).user.create({
      data: {
        email,
        name,
        password,
      },
    });
    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create user");
  }
}

export async function getUserByEmail({ email }: { email: string }) {
  try {
    const user = await (prisma as any).user.findUnique({
      where: { email },
    });
    return user;
  } catch (error) {
    console.error("Error fetching user by email:", error);
    throw new Error("Failed to fetch user");
  }
}