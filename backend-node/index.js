const express = require("express");
const { randomBytes } = require('crypto')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

let submissions = []

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())
// parse application/json
app.use(bodyParser.json())

app.post('/query', (req, res) => {
    const { name, email, destination, noOfTraveller, budget } = req.body;
    let id = randomBytes(4).toString('hex');
    submissions.push({ id, name, email, destination, noOfTraveller, budget });
    res.status(200)
})
app.get('/query', (req, res) => {
    res.status(200).send(submissions)
})

app.listen(8080, () => {
    console.log("App listening on port 8080");
})