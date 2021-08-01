const express = require('express')
const app = express()
const cors = require('cors')

const getAllDoctors = require('./controllers/getAllDoctors')

const port = 8000
const addr = '192.168.1.7'

app.use(cors()) // allow cross-origin

app.get('/ping', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.json('node works!')
})

app.get('/doctors', getAllDoctors)

app.post('/post', (req, res) => {
    console.log(req.body)

    res.send('processing login..')
})

app.listen(port, () => console.log(`listening at ${addr}:${port}`))