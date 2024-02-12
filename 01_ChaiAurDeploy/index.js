const express = require('express')
require('dotenv').config() // ->For handling sesitive information like port numbers
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("This is twitter page")
})

app.get('/login', (req,res) =>{
    res.send('<h1>Please Login</h1>')
})


app.get('/youtube', (req, res) =>{
    res.send('<h2>Chai Aur Code</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})