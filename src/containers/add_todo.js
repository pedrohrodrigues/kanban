import React, {Component} from 'react';
import {connect} from 'react-redux';

class AddTodo extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const data = {
            id: title + ' ' + new Date(),
            title
        }

        this.props.dispatch({
            type:'ADD_TODO',
            data});

        this.getTitle.value = '';
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input type="text" ref={(input)=>this.getTitle = input}  placeholder="Enter Todo Title" name="title" />
                     <br />
                    <button>Add</button>
                </form>
            </div>
        );
    }  
}

export default connect()(AddTodo);