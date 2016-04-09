import React from 'react'

let ListBox = React.createClass({
    render () {
    var outerDivStyle = {
        marginTop : '30px'
    }
        return (
            <div style={outerDivStyle}>
                <div>
                    <input type="text" value="" />
                    <button>Add</button>
                </div>
                <ul>
                    <li></li>
                </ul>
            </div>
        )
    }
})

export default ListBox