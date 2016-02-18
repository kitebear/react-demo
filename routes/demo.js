import express    from 'express'

const router = express.Router()

router.get("/demo/1",(req,res) => {
    res.render('demo/基础写法',{ title: "基础写法" })
})

router.get("/demo/2",(req,res) => {
    res.render('demo/组件式套用',{ title: "组件式套用" })
})

router.get("/demo/3",(req,res) => {
    res.render('demo/SimpleApplication',{ title: "SimpleApplication" })
})

router.get("/demo/4",(req,res) => {
    res.render('demo/API使用',{ title: "API使用" })
})

module.exports = router