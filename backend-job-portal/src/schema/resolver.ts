
import { createUser, loginUser } from "@services/auth.service.ts";
import type { LoginInput, RegisterInput } from "./typeDef.ts";
import {generateToken} from "@lib/jwt.ts";

export const resolvers = {
  Mutation: {
    register: async (_: unknown, args: { input: RegisterInput }) => {
      const user =  createUser(args.input.email, args.input.name, args.input.password, args.input.confirmPassword);
       
      const token = generateToken({ userId: (await user).id, email: args.input.email });
      return { token, user: await user }; 
    },

    login: async (_: unknown, args: { input: LoginInput }) => { 
      const login = loginUser(args.input.email, args.input.password);
      const token = generateToken({ userId: (await login).id, email: args.input.email });
      return { token, user: await login };
       
    },
  },
};