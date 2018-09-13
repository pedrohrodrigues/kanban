import { combineReducers } from 'redux';

const todoReducer = (state = [], action) => {

  switch(action.type) {
      case 'ADD_TODO' :
        return state.concat([action.data]);
      case 'DELETE_TODO' :
        return state.filter((todo)=>todo.id !== action.id);  
      default :
        return state;  
  }

}

export default todoReducer;
