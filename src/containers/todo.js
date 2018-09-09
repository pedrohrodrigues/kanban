
import React, { Component } from 'react';

class Todo extends Component {
  render() {
  return (
    <div>
      <h2>{this.props.todo.title}</h2>
    </div>
  );
 }
}
export default Todo;