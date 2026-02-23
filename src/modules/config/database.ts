
import { Sequelize } from "sequelize";
import { env } from "./env.js";


export const sequelize = new Sequelize(env.DATABASE_URL, {
    dialect: 'postgres'
})

export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established")
    } catch (error) {
        console.log('unable to connect to db', error)
    }
}
