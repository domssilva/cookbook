import {Request, Response} from 'express'

const app = require('express')()
const PORT = 9999

// middleware:
app.use('/', (req: Request, res: Response, next: any) => {
    res.send('hello')
})

app.listen(PORT)