import express from 'express'

const router = express.Router()

router.get('/', function (req, res) {
    res.json({ msg: 'Hello, World! from Express' })
})

router.post('/', function(req, res) {
    res.json({ msg: 'Post Message' })
})

router.route('/')
    .get()

export default router
