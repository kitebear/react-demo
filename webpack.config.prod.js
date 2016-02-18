const webpack   = require('webpack');
const path      = require('path');
const main_path = path.resolve();

module.exports = {
    devtool: 'source-map',
    //页面入口
    entry:
    {
        //main        : main_path + '/public/entry.jsx',
        '基础写法'   : main_path + '/public/test/基础写法.jsx',
        '组件式套用'   : main_path + '/public/test/组件式套用.jsx',
        'SimpleApplication': main_path + '/public/test/SimpleApplication.jsx',
        'API使用': main_path + '/public/test/API使用.jsx',
        vendor: ['react']
    },
    //出口文件输出配置
    output: {
        path: main_path + '/dist',
        filename: "[name].js",
        publicPath: '/dist/'
    },
    //加载器
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader"
            },
            {
                test:/\.jsx|js$/,
                exclude:/(node_modules)/,
                loader: 'babel',
                query:{
                    presets:['es2015', 'stage-0', 'react']
                }
            },
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.png$/, loader: "url-loader?prefix=img/&limit=5000"},
            {test: /\.jpg$/, loader: "url-loader?prefix=img/&limit=5000"},
            {test: /\.gif$/, loader: "url-loader?prefix=img/&limit=5000"},
            {test: /\.woff$/, loader: "url-loader?prefix=font/&limit=5000"}
        ]
    },
    //sourceMap: true, //源支持
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new webpack.ProvidePlugin({
            //$: "jquery",
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
