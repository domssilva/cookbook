const Pool = require('pg').Pool

const pool = new Pool({
    host: 'localhost',
    database: 'healthcare',
    user: 'postgres',
    password: 'manager',
    port: 5432,
})

const getAllDoctors = (request, response) => {
    pool.query('SELECT * FROM doctor', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = getAllDoctors