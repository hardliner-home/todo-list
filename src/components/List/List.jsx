import React from 'react';
import ToDo from '../ToDo/ToDo.jsx'

class List extends React.Component {
    render() {
        const {todos=[], onCheck=f=>f, onRemove=f=>f} = this.props
        return (
            <div className="todo-list">
                {(todos.length === 0) ?
                    <p>No ToDos in List. Please, add higher</p> :
                    todos.map(todo =>
                            <ToDo 
                                key={todo.id}
                                {...todo}
                                onCheck={() => onCheck(todo.id)}
                                onRemove={() => onRemove(todo.id)}
                            />
                        )
                }
            </div>
        )
    }
}

export default List;