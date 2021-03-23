const app = require('express')()
const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded())

app.get('/', (req, res, next) => {
    const html = `
        <h1>e-commerce homepage</h1>
        <a href="/admin/add-product">buy stuff!</a>
    `
    res.send(html)
})

app.use('/admin', adminRoutes)
app.use('/shop', shopRoutes)

// catch-all middleware: 404 error
app.use('/', (req, res, next) => {
    res.status(400).send('<h1>page not found</h1>') // send has to be the last chained method
})

app.listen(9999)
