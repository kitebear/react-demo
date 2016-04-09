/**
 * Created by xiedonghao on 16/2/15.
 */
import React from 'react'

//基础显示
export default class HelloWorldComponent extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div>Hello World!</div>
        );
    }
}