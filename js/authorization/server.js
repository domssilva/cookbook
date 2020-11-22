const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

// server config
app.use(morgan('tiny'))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.redirect('/login')
})

app.get('/login', (req, res) => {
  res.sendFile(`${__dirname}/login.html`)
})

app.post('/login', (req, res) => {
  const user = req.body.user
  const passw = req.body.password

  res.cookie('Authorization', `${user}:${passw}`, {maxAge: 999999, httpOnly: true})

  if (user === 'admin' && passw === user) {
    res.redirect('/admin')
  }

  res.send(' ... ')
})

app.get('/admin', (req, res) => {
  res.send('welcome admin')
})

app.get('/test', (req, res) => {
  res.send('testing...')
})

app.listen(3001, () => console.log('listening on #3001'))

