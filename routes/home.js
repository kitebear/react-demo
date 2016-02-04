import koa_router from 'koa-router'

const router = koa_router()

router.get("/",function *(next) {
    console.log(1)
    yield this.render('index',{ title: "home" })
})

router.get("/user/:id",function () {
    this.body = 'Hello World'
})

module.exports = router