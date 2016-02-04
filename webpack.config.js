const webpack   = require('webpack');
const path      = require('path');
const main_path = path.resolve();

function getConfig(options){
    return {
        //页面入口
        entry: {
            'entry': 'entry.js',
            vendor: []
        },
        //出口文件输出配置
        output: { path: main_path + './dist', filename: "build.js", publicPath: '/dist/' },
        //加载器
        module: {
            loaders: [
                {
                    test: /\.scss$/,
                    loader: "style-loader!css-loader!sass-loader"
                },
                {
                    test: /\.js|jsx$/,
                    loader: 'babel',
                    exclude: /node_modules/
                },
                {test: /\.css$/, loader: "style-loader!css-loader"},
                {test: /\.png$/, loader: "url-loader?prefix=img/&limit=5000"},
                {test: /\.jpg$/, loader: "url-loader?prefix=img/&limit=5000"},
                {test: /\.gif$/, loader: "url-loader?prefix=img/&limit=5000"},
                {test: /\.woff$/, loader: "url-loader?prefix=font/&limit=5000"}
            ]
        },
        babel: {
            presets: ['es2015'],
            plugins: ['transform-runtime']
        },
        //sourceMap: true, //源支持
        plugins: [
            new webpack.ProvidePlugin({
                //$: "jquery",
                //jQuery: "jquery",
                //"window.jQuery": "jquery",
                //"root.jQuery": "jquery",
                //"BMap":"./public/plugins/baidu/baidu.api.js"
            }),
            new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
        ],
        resolve: {
            //查找module的话从这里开始查找
            root: [
                __dirname+ '/public/', //绝对路径
                path.join(__dirname, 'dist'),
                path.join(__dirname, 'node_modules')
            ],
            //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
            extensions: ['', '.js', '.scss','.jsx'],
            //模块别名定义，方便后续直接引用别名，无须多写长长的地址
            alias: {
                //move_img : "plugins/moveimg/move_img.js"
            }
        }
    };
}

module.exports = getConfig({});
