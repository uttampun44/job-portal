import {ApolloServer} from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { expressMiddleware } from "@as-integrations/express5";
import express from 'express';
import chalk from 'chalk';
import dotenv from 'dotenv';
import http from 'http';
import cors from 'cors';
import { typeDefs } from "@schema/typeDef.ts";
import { resolvers } from "@schema/resolver.ts";


dotenv.config();

const httpServer = http.createServer(express());


const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

const app = express();

// converting string to number for PORT, defaulting to 8000 if not set
const PORT = Number(process.env.PORT || 8000);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/graphql', cors(), express.json(), expressMiddleware(server));

app.listen(PORT, () => {
  console.log(chalk.green(`Server is running at http://localhost:${PORT}`));
  console.log(chalk.green(`GraphQL endpoint: http://localhost:${PORT}/graphql`));
});