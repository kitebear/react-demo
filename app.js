import express          from 'express'
import path             from 'path'
import webpack          from 'webpack'
import logger           from 'morgan'
import bodyParser       from 'body-parser'
import cookieParser     from 'cookie-parser'
import session          from 'express-session'
import favicon          from 'serve-favicon'
import webpackConfig    from './webpack.config.dev'

const PATH = __dirname + "/" || path.join("./")

const app       = express()
const router    = require(PATH + 'routes/index.js')
const compiler  = webpack(webpackConfig)

app.set('views', __dirname + '/views')
app.set('view engine', 'html')

app.use(favicon(__dirname + '/public/favicon.ico'))

app.use(koaStaticCache(path.join(__dirname, 'public'), {
    maxAge: 600000 * 60
}))

// 中间件
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'koa_and_react', cookie: { maxAge: 60000*60 }}))

if(!process.env.NODE_ENV != 'production'){
    app.use(logger())

    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath
    }))

    app.use(require('webpack-hot-middleware')(compiler));

    //compiler.watch({
    //    aggregateTimeout: 300,
    //    poll: true
    //}, function(err, stats) {
    //    if(err)
    //        console.log(err.message);
    //    var jsonStats = stats.toJson();
    //    if(jsonStats.errors.length > 0)
    //        console.log(jsonStats.errors);
    //    if(jsonStats.warnings.length > 0)
    //        console.log(jsonStats.warnings);
    //    console.log('compiler complete');
    //});
}

app.use(express.static(path.join(__dirname, 'dist')));

// 响应
//app.use(router.routes()).use(router.allowedMethods())

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: (app.get('env') === 'development') ? err : {}
    });
});

// 监听3000
app.listen(3000,err => {
    if (err)
        throw err

    console.log('this example listening on port 3000')
})

export default app