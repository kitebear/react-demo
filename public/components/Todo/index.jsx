import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import todoApp from './reducers'

var store = createStore(todoApp)
console.log(todoApp)
console.log(store)

export default class ReduxDemo extends Component{
    render () {
        return (
            <Provider store={store} >
                <App />
            </Provider>
        )
    }
}