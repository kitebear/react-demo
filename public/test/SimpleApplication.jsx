/**
 * Created by xiedonghao on 16/2/16.
 */
import React    from 'react'
import ReactDom from 'react-dom'

class TodoList extends React.Component {

    removeTodoList (index) {
        this.props.removeTodoList(index)
    }

    render () {
        return (
            <ul style={{listStyle:'none'}}>
            {
                this.props.items.map((value,index) => {
                    return (
                        <li key={index}>
                            <span style={{width:'100px',display:'inline-block'}}>{value}</span>
                            <a onClick={this.removeTodoList.bind(this,index)} style={{color:'red'}}>X</a>
                        </li>
                    )
                })
            }
            </ul>
        )
    }
}

class TodoInput extends React.Component {
    constructor(props) {
        super(props);
    }

    addTodoList = () => {
        this.props.addTodoList(this.refs.text.value)
        this.refs.text.value = ''
    }
    ///**<input type="text" value="Hellow" defaultValue="Hello" />**/
    render () {
        return (
            <div>
                <input type="text" ref="text" />
                <button onClick={this.addTodoList}>Add</button>
            </div>
        )
    }
}

class SimpleApplication extends React.Component {
    state = {
        items: ['aaa','bbb']
    }

    static defaultProps = {
    }

    removeTodoList = (index) => {
        this.state.items.splice(index,1)
        this.setState({items: this.state.items})
    }

    addTodoList = (value) => {
        this.state.items.push(value)
        this.setState({items: this.state.items})
    }

    render () {
        return (
            <div>
                <h2>TodoAAVVacca</h2>
                <TodoList items={this.state.items} removeTodoList={this.removeTodoList} ></TodoList>
                <TodoInput addTodoList={this.addTodoList} ></TodoInput>
            </div>
        )
    }
}

export default SimpleApplication
