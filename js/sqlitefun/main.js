const app = require('express')()
const PORT_NUMBER = 4003
const sqlite3 = require('sqlite3').verbose()

const DB_TEST = require('constants')

app.get('/', (req, res) => {
  res.send('hello express')
})

app.get('/db', (req, res) => {
  console.log(DB_TEST)
  try {
    // open db in memory
    let db = new sqlite3.Database(':memory:', () => {
      console.log('connected to in-memory SQLite data.')
    })
    // close db
    db.close((err) => {
      if (err) {
        console.log(err.nessage)
        res.redirect('/', 500)
      }
    })
    res.send(db)
  } catch (error) {
    console.log('erro ao criar objeto DATABASE.')
    res.redirect('/', 500)
  }
})

app.listen(PORT_NUMBER, () => {
  console.log(`listening on port #${PORT_NUMBER}`)
})

