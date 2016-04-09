import React                    from 'react'
import ReactDom                 from 'react-dom'
import { Router,Redirect, Route, Link, browserHistory }  from 'react-router'
import createBrowserHistory     from 'history/lib/createBrowserHistory'

import {About,Inbox,Message,SimpleRouter}             from 'components/ReactRouterExp'
import API                      from 'components/API'
import BaseWrite                from 'components/BaseWrite'
import TestComponent            from 'components/TestComponent'
import SimpleApplication        from 'components/SimpleApplication'
import ReactLinkData            from 'components/ReactLinkData'
import ReduxDemo                from 'components/ReduxDemo'

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
                        <Link to="/ReactLink">
                            5.React双向绑定
                        </Link>
                    </li>
                    <li>
                        <Link to="/SimpleRouter">6.简单的使用Router</Link>
                    </li>
                    <li>
                        <Link to="/ReduxDemo">7.ReduxDemo</Link>
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
                <Route path="SimpleRouter" component={SimpleRouter}>
                    <Route path="about" component={About} />
                    <Route path="inbox" component={Inbox} >
                        <Route path="messages/:id" component={Message} />
                    </Route>
                </Route>
                <Route path="API" component={API}></Route>
                <Route path="BaseWrite" component={BaseWrite}></Route>
                <Route path="TestComponent" component={TestComponent}></Route>
                <Route path="SimpleApplication" component={SimpleApplication}></Route>
                <Route path="ReactLink" component={ReactLinkData}></Route>
                <Route path="ReduxDemo" component={ReduxDemo}></Route>
            </Route>
        </Router>
    ),
    document.getElementById('content')
)