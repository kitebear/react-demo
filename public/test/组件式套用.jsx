/**
 * Created by xiedonghao on 16/2/15.
 */
import React from 'react'
import HelloWorldComponent from './HelloWorldComponent'
import ReactDom from 'react-dom'
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
        var commentNodes = this.props.data.map(function(comment){
            return (
                <Comment author={comment.author}>{comment.text}</Comment>
            );
        })
        return (
            <div className="commentList">
                {commentNodes}
                <Comment author="Jordan Walke">This is *another* comment</Comment>
            </div>
        )
    }
})

const CommentForm = React.createClass({
    render: function(){
        return (
            <div className="commentFrom">
                Hello, world! I am a CommentFrom
            </div>
        )
    }
})

const CommentBox = React.createClass({
    render: function(){
        return (
            <div className="commentBox">
                <h1> Comments </h1>
                <CommentList data={this.props.data}></CommentList>
                <CommentForm></CommentForm>
            </div>
        )
    }
})

ReactDom.render(
    <CommentBox data={data}></CommentBox>,
    document.querySelector("#content")
)