/**
 * Created by xiedonghao on 16/2/19.
 */
import React                    from 'react'
import ReactDom                 from 'react-dom'
import { Router, Route, Link }  from 'react-router'

class About extends React.Component{
    render () {
        return (
            <span>关于我</span>
        )
    }
}

class Inbox extends React.Component{
    render () {
        return (
            <div>
                <span>Inbox</span>
                {this.props.children || "Welcome to your Inbox"}
            </div>
        )
    }
}

const Message = React.createClass({
    render() {
        return <h3>Message {this.props.params.id}</h3>
    }
})

class App extends React.Component {
    render () {
        return (
            <div>
                <h1>APP</h1>
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/inbox">inbox</Link>
                    </li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

React.render((
    <Router>
        <Route path="/" component={App}>
            <Route path="about" component={About} />
            <Route path="inbox" component={Inbox} >
                <Route path="messages/:id" component={Message} />
            </Route>
        </Route>
    </Router>
), document.getElementById('content'))

//http://localhost:3000/#/inbox/messages/fadfdsfadfasdfasf312?_k=joobpy