
import { createUser } from "@services/auth.service.ts";
import type { RegisterInput } from "./typeDef.ts";

export const resolvers = {
  Mutation: {
    register: async (_: unknown, args: { input: RegisterInput }) => {
      return createUser(args.input.email, args.input.name, args.input.password);
    },
  },
};