import express from 'express';
import chalk from 'chalk';

const app = express();
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(chalk.green(`Server is running on port ${PORT}`));
});