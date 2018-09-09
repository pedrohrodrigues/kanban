import React, { Component } from 'react';
import AddTodo from '../containers/add_todo';
import ListTodo from '../containers/list_todo';

export default class App extends Component {
  render() {
    return (
      <div>
          <AddTodo />
          <ListTodo />
      </div>
    );
  }
}
