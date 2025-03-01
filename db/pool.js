import { Pool } from "pg";

module.exports = new Pool({
    host: "localhost",
    user: process.env.PGUSER,
    database: "ecommerce",
    password: process.env.PGPASSWORD,
    port: Number(process.env.PGPORT)
})