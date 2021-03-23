const router = require('express').Router()

router.get('/add-product', (req, res, next) => {
    const form = `
        <form method="POST" action="/shop/add-product">
            <input type="text" name="product"/>
            <input type="submit" name="add product"/>
        </form>
    `
    res.send(form)
})

module.exports = router

