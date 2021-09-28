const express = require('express')
const port = process.env.port || 8080
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!!!')
})

app.listen(port, () => {
    console.log('No user in the system')
})
module.exports = app