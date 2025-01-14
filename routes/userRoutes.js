import express from 'express'

const router = express.Router()

router.route('/')
    .get(function (req, res) {
        res.json({ msg: 'Hello, World! from Express' })
    })
    .post(function(req, res) {
        res.json({ msg: 'Post Message' })
    })

export default router
