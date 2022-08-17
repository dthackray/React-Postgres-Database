const { Pool } = require("pg")

const pool = new Pool({
    user: "dan",
    password: "password",
    host: "127.0.0.1",
    port: 5432,
    database: "react_postgres_database"
})

const createTableQuery = `CREATE TABLE accounts (
    user_id serial PRIMARY KEY,
    username VARCHAR ( 50 ) UNIQUE NOT NULL,
    password VARCHAR ( 50 ) UNIQUE NOT NULL);`;

pool
    .query(createTableQuery)
    .then((res) => {
        console.log("Table Created")
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })

module.exports = pool