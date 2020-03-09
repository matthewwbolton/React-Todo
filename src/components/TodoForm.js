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
        <form onSubmit={this.handleSubmit}>
            <input type='text' name='task' value={this.state.task} onChange={this.handleChanges}/>
            <button type='submit'>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    )
}

}

export default TodoForm;