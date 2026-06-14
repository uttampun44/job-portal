import { gql } from "graphql-tag";

export const typeDefs = gql`
 type User {
   id: ID!
   name: String!
   email: String!
   password: String!
   createdAt: String!
   updatedAt: String!
 }

 input RegisterInput {
   name: String!
   email: String!
    password: String! 
}
  type AuthPayload {
    token: String!
    user: User!
  }

  type Mutation {
    register(input: RegisterInput!): AuthPayload!
  }

  type Query {
    _empty: String
  }
`
export interface RegisterInput {
  name: string;
  email: string;
  password: string;
}