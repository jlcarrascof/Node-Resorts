// const express = require('express') // CommonJS
import express from 'express' // ES2015 module

// Create express app

const app = express()

// Define the route for the root URL

app.get('/', (req, res) => {
    res.json({ message: 'Hello, World! from Express' })
})

app.get('/about', (req, res) => {
    res.send('About this page')
})


// Define the port and start the server

const port = 3000
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
