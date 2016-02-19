import express          from 'express'
import path             from 'path'
import webpack          from 'webpack'
import logger           from 'morgan'
import bodyParser       from 'body-parser'
import cookieParser     from 'cookie-parser'
import session          from 'express-session'
import favicon          from 'serve-favicon'
import engines          from 'consolidate'

const PATH = __dirname + "/" || path.join("./")

const webpackConfig = require((process.env.NODE_ENV != 'production')?'./webpack.config.dev':'./webpack.config.prod')
const app       = express()

var compiler  = webpack(webpackConfig)

app.use(favicon(__dirname + '/public/favicon.ico'))

app.engine('html', engines.hogan)
app.set('views', __dirname + '/views')
app.set('view engine', 'html')

app.use(session({ secret: 'react_demo', cookie: { maxAge: 60000*60 }}))

// 中间件
app.use(bodyParser.json())
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));

if(process.env.NODE_ENV != 'production'){
    app.use(logger())

    compiler  = webpack(webpackConfig)

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
}else{
    compiler.run(function(err, stats) {
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

app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'views', 'index.html'))
})

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// 监听3000
app.listen(3000,err => {
    if (err)
        throw err

    console.log('this example listening on port 3000')
})

export default app