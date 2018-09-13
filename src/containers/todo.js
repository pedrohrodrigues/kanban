
import React, { Component } from 'react';
import {connect} from 'react-redux';

class Todo extends Component {
  render() {
  return (
    <div>
      <h2>{this.props.todo.title}</h2>
      <button>Edit</button>
      <button onClick={()=>this.props.dispatch({type:'DELETE_TODO',id:this.props.todo.id})}>Delete</button>
    </div>
  );
 }
}

export default connect()(Todo);