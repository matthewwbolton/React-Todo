import React from 'react';


class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ''
        };
    }


handleChanges = event => {
    this.setState({
        task: event.target.value
    });
};

handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.task);
    this.setState({
        task: ''
    });
};





render() {
    
    return(
        <div>
        <form onSubmit={this.handleSubmit}>
            <input type='text' name='task' value={this.state.task} onChange={this.handleChanges}/>
            <button>Add Todo</button>
        </form>
        <div>
            <button onClick={this.props.clearCompleted}>Clear Completed</button>
        </div>
        </div>
       
    )
}

}

export default TodoForm;