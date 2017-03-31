import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

class App extends Component {
    render() {
        console.log(32131212)
        return (
            <div>
                <AddTodo
                    onAddClick={text =>
                        console.log('add todo', text)
                      } />
                <TodoList
                    todos={[{
                        text: 'Use Redux',
                        completed: true
                      }, {
                        text: 'Learn to connect it to React',
                        completed: false
                      }]}
                    onTodoClick={todo =>
                        console.log('todo clicked', todo)
                      } />
                <Footer
                    filter='SHOW_ALL'
                    onFilterChange={filter =>
                        console.log('filter change', filter)
                      } />
            </div>
        );
    }
}



export default App