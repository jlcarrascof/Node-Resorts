// const express = require('express') // CommonJS
import express from 'express' // ES2015 module
import userRoutes from './routes/userRoutes.js'

// Create express app

const app = express()

// Define the view engine
app.set('view_engine', 'pug')
app.set('views', './views')

// Public folder for static files
app.use(express.static('public'))

// Define routes
app.use('/auth', userRoutes)

// Define the port and start the server

const port = 3000
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
