const express = require('express')

const port = process.env.PORT || 3000
const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', { app: 'Now', version: '2.0' })
})

app.get('/about', (req, res) => {
    res.send('<h1><marquee direction=left>Hello from Express path /about on Now 2.0!</marquee></h1>')
    res.end()
})

app.listen(port, err => {
    if (err) throw err
    console.log(`> Ready On Server http://localhost:${port}`)
})
