import React from 'react';
import PropTypes from 'prop-types';

class AddToDo extends React.Component {

    constructor(props) {
        super(props)
        this.add = this.add.bind(this)
    }

    add(e) {
        const {_todo} = this.refs
        e.preventDefault();
        this.props.onNewTodo(_todo.value)
        _todo.value = ''
        _todo.focus()
    }

    static propTypes = {
        onNewTodo: PropTypes.func
    }

    static defaultProps = {
        onNewTodo: f=>f
    }

    render() {
        return (
            <form className="add-todo" onSubmit={this.add}>
                <input 
                    ref="_todo"
                    type="text"
                    placeholder="create new todo..." 
                    required  
                />
                <button>add</button>
            </form>
        )
    }
}

// const AddToDo = ({onNewTodo=f=>f}) => {
//     let _todo
//     const add = (e) => {
//         e.preventDefault()
//         onNewTodo(_todo.value)
//         _todo.value = ''
//         _todo.focus()
//     }

//     return (
//         <form className="add-todo" onSubmit={add}>
//             <input 
//                 ref={input => _todo = input}
//                 type="text"
//                 placeholder="create new todo..." 
//                 required  
//             />
//             <button>add</button>
//         </form>
//     )
// }

export default AddToDo;