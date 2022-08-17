const express = require("express")
const cors = require("cors")
const pool = require("./database")

const app = express()

const port = 4000

app.use(express.json())
app.use(cors())

app.post("/adduser", (req, res) => {
    const username = req.body["username"]
    const password = req.body["password"]

    console.log("Username: " + username)
    console.log("Password: " + password)

    const insertStatement = `INSERT INTO accounts ( username, password ) VALUES ( '${username}', '${password}' );`

    pool.query(insertStatement)
        .then((res) => {
            console.log("Data Saved")
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })

    console.log(req.body)
    res.send("Response sent: " + req.body)
})

app.listen(port, () => console.log(`Server is listening on localhost:${port}`))