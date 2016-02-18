/**
 * Created by xiedonghao on 16/2/15.
 */
import React from 'react'
import HelloWorldComponent from './HelloWorldComponent'
import ReactDom from 'react-dom'
//基础显示
//React.render(
//    <h1>Hello, world!</h1>,
//    document.getElementById('example')
//)

//另一种写法
//React.render(
//    React.createElement('h1',null,'hello world'),
//    document.querySelector('#example')
//)

//组件化用法
ReactDom.render(
    <HelloWorldComponent></HelloWorldComponent>,
    document.querySelector('#example')
)