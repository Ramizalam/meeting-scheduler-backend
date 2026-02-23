import dotenv from 'dotenv'

dotenv.config();

export const env = {
    DATABASE_URL : process.env.POSTGRESQL_URL  as string
};