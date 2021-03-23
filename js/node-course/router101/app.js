const app = require('express')()
const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded())
app.use('/', adminRoutes)
app.use('/', shopRoutes)

app.get('/', (req, res, next) => {
    const html = `
        <h1>e-commerce homepage</h1>
        <a href="/add">buy stuff!</a>
    `
    res.send(html)
})

app.listen(9999)
