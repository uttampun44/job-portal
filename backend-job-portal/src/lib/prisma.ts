import { PrismaClient } from "../../prisma/generated/prisma/client.ts";
import dotenv from "dotenv";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

dotenv.config();

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const adapter = new PrismaMariaDb({
  user: process.env.DATABASE_USER as string,
    password: process.env.DATABASE_PASSWORD as string,
    database: process.env.DATABASE_NAME as string,
    host: process.env.DATABASE_HOST as string,
    port: parseInt(process.env.DATABASE_PORT || '3306', 10),
});


export const prisma =
  globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;