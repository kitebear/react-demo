import koa_router from 'koa-router'
import home       from './home'

const router = koa_router()

router.use(home.routes())

module.exports = router