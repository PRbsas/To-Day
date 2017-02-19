import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Title from './components/Title';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

window.id = 0;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
    this.API_URL = 'http://58a8d0a507165e12007cb024.mockapi.io/tasks'
}

componentDidMount() {
  axios.get(this.API_URL)
    .then((res) => {
      this.setState({ data: res.data });
    });
}

addTask(value) {
  const taskItem = { text: value }

  axios.post(this.API_URL, taskItem)
    .then((res) => {
      this.state.data.push(res.data);
      this.setState({ data: this.state.data });
    });

}

handleRemove(id) {
  const { data } = this.state;
  const isNotId = data.filter((taskItem) => {
    if(taskItem.id !== id) {
      return taskItem;
    }
  });
  axios.delete(this.API_URL+'/'+id)
    .then((res) => {
      this.setState({ data: isNotId });
    })
}

  render() {
    return (
      <div className="App">
        <Title taskTotal={this.state.data.length}/>
        <AddTask addTask={this.addTask.bind(this)}/>
        <TaskList
          taskItems={this.state.data}
          removeItem={this.handleRemove.bind(this)}
        />
      </div>
    );
  }
}

export default App;
