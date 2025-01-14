import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.json({ msg: 'Hello, World! from Express' })
})

router.post('/', (req, res) => {
    res.json({ msg: 'Post Message' })
})

export default router
