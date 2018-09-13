import React, {Component} from 'react';
import { connect } from 'react-redux';
import Todo from '../containers/todo'
class ListTodo extends Component {
      render () {
          return (
                <div>
                     {this.props.todos.map((todo) => <Todo key={todo.id} todo={todo} />)}             
                </div>
          );
      }
}

const mapStateToProps = (state) => {

    return {
        todos: state
    }
}

export default connect (mapStateToProps)(ListTodo);