import React from 'react';
import {v4} from 'uuid'
import PropTypes from 'prop-types';
import List from '../List/List.jsx';
import AddToDo from '../AddToDo/AddToDo.jsx';

class ToDoList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            todos : []
        }

        this.addToDo = this.addToDo.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
        this.saveTodo = this.saveTodo.bind(this)
        this.changeCheck = this.changeCheck.bind(this)
    }

    static propTypes = {
        todos: PropTypes.array.isRequired
    }

    componentDidMount() {
        const {todos} = JSON.parse(localStorage.getItem('todos'))
        if (todos.length !== 0) {
            this.setState({todos})
        }
    }

    addToDo(name) {
        const todos = [
            ...this.state.todos,
            {
                id: v4(),
                name,
                status : false
            }
        ]
        this.saveTodo({todos})
        this.setState({todos})
    }

    changeCheck(id) {
        const todos = this.state.todos.map(todo => 
            (todo.id !== id) ? 
                todo : 
                {
                    ...todo,
                    status: !todo.status
                } 
        )

        this.saveTodo({todos})
        this.setState({todos}) 
    }

    removeTodo(id) {
        const todos = this.state.todos.filter(
            todo => todo.id !== id
        )
        this.setState({todos})
        this.saveTodo({todos})
    }

    saveTodo(list) {
        localStorage.setItem('todos', JSON.stringify(list))
    }

    render() {
        const {addToDo, changeCheck, removeTodo} = this
        const {todos} = this.state
        return (
            <div className="app">
                <AddToDo 
                    onNewTodo={addToDo}
                />
                <List
                    todos={todos}
                    onCheck={changeCheck}
                    onRemove={removeTodo}
                />
            </div>
        )
    }
}

export default ToDoList;