import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.json({ message: 'Hello, World! from Express' })
})

router.post('/about', (req, res) => {
    res.json({msg: 'Post Message'})
})

export default router
