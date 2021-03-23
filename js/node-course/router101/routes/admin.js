const router = require('express').Router()

router.get('/add', (req, res, next) => {
    const form = `
        <form method="POST" action="/add">
            <input type="text" name="product"/>
            <input type="submit" name="add product"/>
        </form>
    `
    res.send(form)
})

module.exports = router

