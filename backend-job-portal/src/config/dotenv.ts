import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

export const configEnv = {
  DATABASE_URL: process.env.DATABASE_URL || "mysql://root:@localhost:3306/job_portal",
  PORT: process.env.PORT || 8000,
};