import React   from 'react'
import Addons  from 'react-addons'

//class ReactLinkData extends React.Component {
//
//    static defaultProps = { initialCount: 0 }
//
//    static propTypes = { initialCount: React.PropTypes.number }
//
//    mixins = [React.addons.LinkedStateMixin]
//
//    constructor(props) {
//        super(props)
//        this.state = {count: props.initialCount}
//    }
//
//    render () {
//        return (
//            <div>
//                <h1>双向绑定数据</h1>
//                <input type="text" value={ this.state.count }  />
//                <p></p>
//            </div>
//        )
//    }
//}



var ReactLinkData = React.createClass({
    mixins : [Addons.LinkedStateMixin],
    getInitialState: function() {
        return {count: 0};
    },
    handleChange () {
        this.setState({count: this.state.count + 1});
    },
    render () {
        return (
            <div>
                <h1>双向绑定数据</h1>
                <input type="text" valueLink={this.linkState('count')}  />
                <p>{this.state.count}</p>
                <BottomBox count = {this.state.count} handleChange = {this.handleChange} ></BottomBox>
            </div>
        )
    }
})

class BottomBox extends React.Component {
    render () {
        return (
            <div>
                <button onClick={this.props.handleChange}>加1</button>
                <p>{this.props.count}</p>
            </div>
        )
    }
}

export default ReactLinkData