const express = require("express")
const cors = require("cors")

const app = express()

const port = 4000

app.use(express.json())
app.use(cors())

app.get("/adduser", (req, res) => {
    console.log(req.body)
    res.send("Response sent: " + req.body)
})

app.listen(port, () => console.log(`Server is listening on localhost:${port}`))