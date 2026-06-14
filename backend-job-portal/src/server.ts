import express from 'express';
import chalk from 'chalk';
import dotenv from 'dotenv';
import { type Request, type Response } from 'express';
import Routes from "@routes/route.ts";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', Routes);

app.listen(PORT, () => {
  console.log(chalk.green(`Server is running on port ${PORT}`));
});