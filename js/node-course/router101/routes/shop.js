const router = require('express').Router()

router.post('/add', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router

