const express = require("express")
const cors = require("cors")
const pool = require("./database")

const app = express()

const port = 4000

app.use(express.json())
app.use(cors())

app.post("/adduser", (req, res) => {
    const username = req.body["username"]
    const age = req.body["age"]

    console.log("Username: " + username)
    console.log("Age: " + age)

    const insertStatement = `INSERT INTO entries ( username, age ) VALUES ( '${username}', '${age}' );`

    pool.query(insertStatement)
        .then((res) => {
            console.log("Data Saved")
        })
        .catch((err) => {
            console.log("Error: Data Not Saved")
        })
})

app.listen(port, () => console.log(`Server is listening on localhost:${port}`))