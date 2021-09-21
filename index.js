const express = require('express')
const port = process.env.port || 8080
const app = express()

app.get('/users', (req, res) => {
    res.send('Nattamon Jaroensirisombat')
})

app.listen(port, () => {
    console.log('No user in the system')
})
module.exports = app