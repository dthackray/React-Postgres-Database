const express = require("express")
const cors = require("cors")
const pool = require("./database")

const app = express()

const port = 4000

app.use(express.json())
app.use(cors())

app.post("/adduser", (req, res) => {
    const name = req.body["name"]
    const age = req.body["age"]

    console.log("Name: " + name)
    console.log("Age: " + age)

    const insertStatement = `INSERT INTO entries ( name, age ) VALUES ( '${name}', '${age}' );`

    pool.query(insertStatement)
        .then((res) => {
            console.log("Data Saved")
        })
        .catch((err) => {
            console.log("Error: Data Not Saved")
        })
})

app.listen(port, () => console.log(`Server is listening on localhost:${port}`))