import { combineReducers } from 'redux';

const todoReducer = (state = [], action) => {

  switch(action.type) {
      case 'ADD_TODO' :
        return state.concat([action.data]);
      default :
        return state;  
  }

}

export default todoReducer;
