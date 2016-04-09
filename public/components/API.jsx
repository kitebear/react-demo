/**
 * Created by xiedonghao on 16/2/18.
 */
import React from 'react'

/**
 * React.Children.forEach(object children, function fn [, object context])
 * 遍历子元素，对每一个子元素执行回调，但不像上述的 map 那样最终返回一个新的集合（跟 ES5 的 Array.forEach 差不多）
 **/
//var Hello = React.createClass({
//
//    render: function() {
//        React.Children.forEach(this.props.children, function(child){
//            console.log(child.props, child.key)
//        });
//        return <div>Hello {this.props.name}</div>;
//    }
//});
//
//ReactDom.render(<Hello name="World">
//    <li myProp="test"/>
//    <li key="blah2" myProp="test2"/>
//    <li key="blah3"/>
//</Hello>, document.getElementById("content"));

/**
 * React.Children.count(object children)
 * 返回子元素的总数：
 */
var API = React.createClass({
    render : function() {
        var nums = React.Children.count(this.props.children);
        return (<ul>
            <li>一共有{nums}个子元素!!!!!!</li> //44444444
            {this.props.children}
        </ul>)
    }
});

export default API