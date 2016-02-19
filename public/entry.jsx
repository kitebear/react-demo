import React                    from 'react'
import ReactDom                 from 'react-dom'
import { Router, Route, Link, browserHistory }  from 'react-router'
import createBrowserHistory     from 'history/lib/createBrowserHistory'

import SimpleRouter             from 'test/SimpleRouter'
import API                      from 'test/API'
import BaseWrite                from 'test/BaseWrite'
import TestComponent            from 'test/TestComponent'
import SimpleApplication        from 'test/SimpleApplication'

require('sass/index')

class App extends React.Component {
    render () {
        return (
            <section>
                <ul className="bar bar-left">
                    <li>
                        <Link to="/BaseWrite">
                            1.基础Demo
                        </Link>
                    </li>
                    <li>
                        <Link to="/TestComponent" >
                            2.组件式套用
                        </Link>
                    </li>
                    <li>
                        <Link to="/SimpleApplication">3.SimpleApplication</Link>
                    </li>
                    <li>
                        <Link to="/API">
                            4.API使用
                        </Link>
                    </li>
                    <li>
                        <Link to="/SimpleRouter">5.简单的使用Router</Link>
                    </li>
                </ul>
                <div className="bar bar-right">
                    { this.props.children }
                </div>
            </section>
        )
    }
}

ReactDom.render(
    (
        <Router history={browserHistory} >
            <Route path="/" component={App}>
                <Route path="SimpleRouter" component={SimpleRouter}></Route>
                <Route path="API" component={API}></Route>
                <Route path="BaseWrite" component={BaseWrite}></Route>
                <Route path="TestComponent" component={TestComponent}></Route>
                <Route path="SimpleApplication" component={SimpleApplication}></Route>
            </Route>
        </Router>
    ),
    document.getElementById('content')
)