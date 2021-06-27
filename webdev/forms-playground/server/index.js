
const express = require('express')
const path = require('path')
const { send } = require('process')
const app = express()

// CONSTANTS ========================================
const PORT = 3388
const VIEW_PATH = path.join(__dirname,'/view')
const APP_PATHS = {
    home: path.join(VIEW_PATH, 'index.html'),
    profile: path.join(VIEW_PATH, 'profile.html'),
}

// CONFIGS ==========================================
app.use(express.urlencoded({ extended: true }))

// ROUTES  ==========================================
app.get('/', (req, res) => {
    if (req.query) {
        printFancy('QUERY', req.query)
    }
    res.sendFile(APP_PATHS.home)
})

app.post('/handle-post', (req, res) => {
    printFancy('post', req.body)
    if (req.body) {
        const {login, password} = req.body
        if (login === password) {
            /*
            There is no way to forward the header with the redirect. you must use the data as a query/cookie to pass it for the next request
                https://stackoverflow.com/questions/46133557/why-is-my-header-not-being-set-on-redirect
                https://stackoverflow.com/questions/1969709/how-to-forward-headers-on-http-redirect

            for example:
                res.set('X-Profile-Key', login)

            this would set the response header (res with status code 302. but the GET afterwars will not carry the header)
            */
            res
                .cookie('X-Profile', login)
                .redirect('/profile')
        } else {
            res.status(401).send('wrong credentials')
        }
    } else {
        res.sendFile(APP_PATHS.profile)
    }
})

app.get('/profile', (req, res) => {
    printFancy('X-Profile-Key', req.headers)
    res
        .clearCookie('X-Profile')
        .sendFile(APP_PATHS.profile)
})

app.listen(PORT, () => console.log(`listening on #${PORT}`))

function printFancy(name, thingToPrint) {
    console.log(`\n=========== ${name} ==========`)
    console.log(thingToPrint)
    console.log('==============================\n')
}