import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.json({ message: 'Hello, World! from Express' })
})

router.get('/about', (req, res) => {
    res.send('About this page')
})

export default router
