const { Pool } = require("pg")

const pool = new Pool({
    user: "postgres",
    password: "passwd",
    host: "localhost",
    port: 5432
})

pool.query("CREATE DATABASE react_postgres_database;")
    .then((res) => {
        console.log("Database Created")
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })

module.exports = pool