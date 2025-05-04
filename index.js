// const express = require('express') // CommonJS
import express from 'express' // ES2015 module
import userRoutes from './routes/userRoutes.js'
import db from './config/db.js' // Import the database configuration

// Create express app

const app = express()

// Handle form data
app.use(express.urlencoded({ extended: true }))

// Connect to the database
try {
  await db.authenticate()
  db.sync() // Synchronize the models with the database
  console.log('Database connected...')
} catch (error) {
  console.log(error)
}

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
