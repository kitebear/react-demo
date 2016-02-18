import home       from './home'
import demo       from './demo'

module.exports = (app) => {
    app.use(home)
    app.use(demo)

    app.get("/",function (req,res) {
        res.render('index.html',{ title: "home" })
        //res.send('Hello wordl')
    })
}