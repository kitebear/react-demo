import React                    from 'react'
import ReactDom                 from 'react-dom'
import { Router, Route, Link, browserHistory }  from 'react-router'
import createBrowserHistory     from 'history/lib/createBrowserHistory'

import SimpleRouter             from 'test/SimpleRouter'

require('sass/index')

class App extends React.Component {
    render () {
        return (
            <section>
                <ul>
                    <li>1.基础Demo</li>
                    <li>2.组件式套用</li>
                    <li>3.SimpleApplication</li>
                    <li>4.API使用</li>
                    <li>
                        <Link to="/SimpleRouter">5.简单的使用Router</Link>
                    </li>
                </ul>
                <div></div>
            </section>
        )
    }
}

ReactDom.render(
    (
        <Router history={browserHistory} >
            <Route path="/" component={App}>
                <Route path="SimpleRouter" component={SimpleRouter}></Route>
            </Route>
        </Router>
    ),
    document.getElementById('content')
)