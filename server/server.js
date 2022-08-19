const express = require("express")
const cors = require("cors")
const pool = require("./database")

const app = express()

const port = 4000

app.use(express.json())
// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
//     next();
//   });
app.use(cors())

const addUser = (body) => {
    return new Promise(function(resolve, reject) {
        const {name, age } = body
        const insertStatement = `INSERT INTO entries ( name, age ) VALUES ( '${name}', '${age}' );`
    
        pool.query(insertStatement, [name, age], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`A new user has been added`)
        })
    })
    }

app.post('/adduser', (req, res) => {
    addUser(req.body)
    .then(response => {
        res.status(200).send(response)
    })
    .catch(error => {
        res.status(500).send(error)
    })
})

module.exports (addUser)

app.listen(port, () => console.log(`Server is listening on localhost:${port}`))