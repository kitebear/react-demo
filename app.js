import Koa              from 'koa'
import logger           from 'koa-logger'
import bodyParser       from 'koa-bodyparser'
import koaStatic        from 'koa-static'
import koaJson          from 'koa-json'
import path             from 'path'
import koaStaticCache   from 'koa-static-cache'
import views            from 'koa-views'
import favicon          from 'koa-favicon'
import webpack          from 'webpack'
import webpackConfig    from './webpack.config'

const PATH = __dirname + "/" || path.join("./")

const app       = new Koa();
const router    = require(PATH + 'routes/index.js')
const compiler  = webpack(webpackConfig);

app.use(favicon(__dirname + '/public/favicon.ico'))

app.use(views('views', {
    root: __dirname + '/views',
    default: 'html'
}))

app.use(koaStaticCache(path.join(__dirname, 'public'), {
    maxAge: 600000 * 60
}))

// 中间件
app.use(bodyParser())
app.use(koaJson())

if(!process.env.NODE_ENV != 'production'){
    app.use(logger())

    compiler.watch({
        aggregateTimeout: 300,
        poll: true
    }, function(err, stats) {
        if(err)
            console.log(err.message);
        var jsonStats = stats.toJson();
        if(jsonStats.errors.length > 0)
            console.log(jsonStats.errors);
        if(jsonStats.warnings.length > 0)
            console.log(jsonStats.warnings);
        console.log('compiler complete');
    });
}

app.use(koaStatic(__dirname + '/dist'))

// 响应
app.use(router.routes()).use(router.allowedMethods())

// 错误
app.on('error', function(err, ctx){
    console.log('server error', err, ctx)
});

// 监听3000
app.listen(3000,err => {
    if (err)
        throw err

    console.log('this example listening on port 3000')
})

export default app