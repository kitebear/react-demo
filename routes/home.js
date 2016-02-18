import express    from 'express'

const router = express.Router();

router.get("/user/:id",function () {
    res.body = 'Hello Horld'
})

module.exports = router