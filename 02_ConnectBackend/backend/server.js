// const express = require('express');
import express from "express";

const app = express();


app.get('/api/jokes', (req,res) =>{
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a Joke'
        },
        {
            id: 2,
            title: 'A 2 joke',
            content: 'This is a Joke'
        },
        {
            id: 3,
            title: 'A 3 joke',
            content: 'This is a Joke'
        },
        {
            id: 4,
            title: 'A 4 joke',
            content: 'This is a Joke'
        },
        {
            id: 5,
            title: 'A 5 joke',
            content: 'This is a Joke'
        },
    ]
    res.send(jokes)
})


// app.get('/', (req, res)=>{
//     res.send('server is ready')
// })

const port = process.env.port || 5000
app.listen(port, ()=>{
    console.log("Server Running");
})