import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CurrentTasks from './pages/CurrentTasks';
import CompletedTasks from './pages/CompletedTask';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={CurrentTasks}/>
          <Route path="/completed" component={CompletedTasks}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;