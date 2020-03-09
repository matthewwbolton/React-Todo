import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';








const tasks = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks,
      task: ''
    };
  }

  
  addTodo = todo => {
    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTodo]
    });
  };
  



  toggleCompleted = clickedTaskId => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === clickedTaskId) {
       return {...task, completed: !task.completed};
        } else {
          return task;
        }
      })
    });
  };

  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.completed === false)})  
    };


  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          tasks={this.state.tasks}
          toggleCompleted={this.toggleCompleted}
        />
        <TodoForm tasks={tasks} clearCompleted={this.clearCompleted} addTodo={this.addTodo}/>
      </div>
    );
  }

  storage = window.localStorage.setItem('tasks', JSON.stringify(tasks));

  localStorage = () => {

  }


 
}



export default App;
