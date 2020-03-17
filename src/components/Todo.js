import React from 'react';

const Todo = (props) => {
    
    
    return(
        <div>
            <h3 onClick={() => props.toggleCompleted(props.task.id)} className={`${props.task.completed ? 'completed' : ''}`}>{props.task.task}</h3>
        </div>
    )
}

export default Todo;
