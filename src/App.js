import React, { Component } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }

};

  render() {
    return (
      <div className="App">
        <h1>ToDo App</h1>
        <AddTask />
        <TaskList
          taskItems={[{id: 123, text: 'Hello'}]}
        />
      </div>
    );
  }
}

export default App;
