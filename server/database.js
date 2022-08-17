const { Pool } = require("pg")

const pool = new Pool({
    user: "dan",
    password: "password",
    host: "127.0.0.1",
    port: 5432,
    database: "react_postgres_database"
})

module.exports = pool