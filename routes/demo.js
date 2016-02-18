import koa_router from 'koa-router'

const router = koa_router()

router.get("/demo/1",function *(next) {
    yield this.render('demo/基础写法',{ title: "基础写法" })
})

router.get("/demo/2",function *(next) {
    yield this.render('demo/组件式套用',{ title: "组件式套用" })
})

router.get("/demo/3",function *(next) {
    yield this.render('demo/SimpleApplication',{ title: "SimpleApplication" })
})

router.get("/demo/4",function *(next) {
    yield this.render('demo/API使用',{ title: "API使用" })
})

module.exports = router