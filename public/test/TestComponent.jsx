/**
 * Created by xiedonghao on 16/2/15.
 */
import React from 'react'
import marked from 'marked'
//基本写法
//const CommentBox = React.createClass({
//    render: function(){
//        return (
//            <div className="commentBox">
//                Hello, world! I am a CommentBox.
//            </div>
//        )
//    }
//})
//
//ReactDom.render(
//    <CommentBox></CommentBox>,
//    document.querySelector("#content")
//)

//JSX语法
//const CommentBox = React.createClass({
//    displayName: 'CommentBox',
//    render: function () {
//        return (
//            React.createElement(
//            'div',
//            {className: 'commentBox'}, "Hello, world! II am a CommentBox.")
//        )
//    }
//})
//
//ReactDom.render(
//    React.createElement(CommentBox,null),
//    document.querySelector('#content')
//)

//插入数据模型
var data = [
    {author: "Pete Hunt", text: "This is one comment"},
    {author: "Jordan Walke", text: "This is *another* comment"}
];

const Comment = React.createClass({
    rawMarkup: function() {
        var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
        return { __html: rawMarkup };
    },
    render () {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {marked(this.props.children.toString())}
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        )
    }
})

//嵌套组件
const CommentList = React.createClass({
    render () {
        return (
            <div className="commentList">
                { this.props.data.map((comment,index) => {
                    return <Comment key={index} author={comment.author}>{comment.text}</Comment>
                }) }
                <Comment author="Jordan Walke">This is *another* comment</Comment>
            </div>
        )
    }
})

const CommentForm = React.createClass({
    render: function(){
        let commentState = this.props.data.map((value,index) => {
            return (
                <li key={index}> {value} </li>
            )
        })
        return (
            <div className="commentFrom">
                Hello, world! I am a CommentFrom,看一下序列
                { commentState }
                <button onClick={this.props.ck}></button>
            </div>
        )
    }
})

const TestComponent = React.createClass({
    //第一次初始化时调用 返回state的值
    getInitialState () {
        return { data: [1,2,3,4] };
    },
    ck () {
        console.log("执行");
    },
    loadCommentsFromServer: function() {
        setTimeout(() => {
            this.setState({data: [5,6,7,8]});
        },3000);

        //$.ajax({
        //    url: this.props.url,
        //    dataType: 'json',
        //    cache: false,
        //    success: function(data) {
        //        this.setState({data: data});
        //    }.bind(this),
        //    error: function(xhr, status, err) {
        //        console.error(this.props.url, status, err.toString());
        //    }.bind(this)
        //});
    },
    //组件渲染的时候被 React 自动调用的方法
    componentDidMount: function() {
        //this.loadCommentsFromServer();
        //setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },
    render: function(){
        return (
            <div className="commentBox">
                <h1> Comments </h1>
                <CommentList data={data}></CommentList>
                <CommentForm data={this.state.data} ck={this.ck}></CommentForm>
            </div>
        )
    }
})

export default TestComponent