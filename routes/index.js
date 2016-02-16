import koa_router from 'koa-router'
import home       from './home'
import demo       from './demo'

const router = koa_router()

router.use(home.routes())
router.use(demo.routes())

module.exports = router