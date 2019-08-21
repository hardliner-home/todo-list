import React from 'react'

class ToDo extends React.Component{
    render() {
        const {status, name, onCheck=f=>f, onRemove=f=>f} = this.props
        return(
            <div className={(status) ? "on" : "off"}>
                {name}
                <input type="checkbox" checked={status} onChange={onCheck}/>
                <button onClick={onRemove}>delete</button>
            </div>
        )
    }
}

export default ToDo;