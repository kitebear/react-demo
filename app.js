import Koa          from 'koa'
import logger       from 'koa-logger'
import bodyParser   from 'koa-bodyparser'
import koa_static   from 'koa-static'
import koa_json     from 'koa-json'
import path         from 'path'
import koa_static_cache from 'koa-static-cache'
import views        from 'koa-views'
import favicon      from 'koa-favicon'

const PATH = __dirname + "/" || path.join("./")

const app       = new Koa();
const router    = require(PATH + 'routes/index.js')

app.use(favicon(__dirname + '/public/favicon.ico'))

app.use(views('views', {
    root: __dirname + '/views',
    default: 'html'
}))

app.use(koa_static_cache(path.join(__dirname, 'public'), {
    maxAge: 600000 * 60
}))

// 中间件
app.use(bodyParser())
app.use(koa_json())

if(!process.env.NODE_ENV != 'production'){
    app.use(logger())
}

app.use(koa_static(__dirname + '/public'))

// 响应
app.use(router.routes()).use(router.allowedMethods())

// 错误
app.on('error', function(err, ctx){
    log.error('server error', err, ctx)
})

// 监听3000
app.listen(3000,err => {
    if (err)
        throw err

    console.log('this example listening on port 3000')
})

export default app