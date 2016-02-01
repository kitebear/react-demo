import Koa    from 'koa'
import logger from 'koa-logger'
import bodyParser from 'koa-bodyparser'
import path   from 'path'

const PATH = __dirname + "/" || path.join("./");

const app           = new Koa();
const router        = require(PATH + 'routes/index.js');

// 中间件
if(!process.env.NODE_ENV != 'production'){
    app.use(logger());
}

app.use(bodyParser());

// 响应
app.use(router.routes()).use(router.allowedMethods());

// 错误
app.on('error', function(err, ctx){
    log.error('server error', err, ctx);
});

// 监听3000
app.listen(3000,err => {
    if (err)
        throw err

    console.log('this example listening on port 3000')
});

export default app