const express = require('express')

// Create express app

const app = express()



// Define the port and start the server

const port = 3000
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
