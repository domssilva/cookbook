const app = require('express')()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const PAGES_PATH = `${__dirname}/pages`

// server config
app.use(morgan('tiny'))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/robots.txt', (req, res) => {
  res.type('text/plain')
  res.send("User-agent: *\nDisallow: /admin")
})

app.get('/', (req, res) => {
  res.redirect('/login')
})

app.get('/login', (req, res) => {
  res.sendFile(`${PAGES_PATH}/login.html`)
})

app.post('/login', (req, res) => {
  const user = req.body.user
  const passw = req.body.password

  res.cookie('Authorization', `${user}:${passw}`, {maxAge: 999999, httpOnly: true})

  if (user === 'admin' && passw === user) {
    res.redirect('/admin')
  }

  res.sendFile(`${PAGES_PATH}/profile.html`)
})

app.get('/admin', (req, res) => {
  
  const isAdmin = req.cookies["Authorization"] === 'admin:admin'

  if (isAdmin) {
    res.send('admin panel')
  }

  res.status(403).send('get out of here!')
})

app.get('/eatcookies', (req, res) => {
  console.log('nham nham')

  res.clearCookie('Authorization')
  res.redirect('/login')
})

app.listen(3001, () => console.log('listening on #3001'))

