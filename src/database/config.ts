import "dotenv/config"
export default {
    database: process.env.DATABASE_NAME,
    dialect: 'postgres',
    port: 5432,
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    logging: false,
}