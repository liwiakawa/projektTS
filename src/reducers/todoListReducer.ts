import * as actionTypes from "../actions/types/todolistTypes";
import { ISingleElementList } from "../entities/todoSingleEl";

export interface ITodoListReducer {
  todoList: ISingleElementList[];
}

const defaultState = (): ITodoListReducer => ({
  todoList: [],
});

export default (state = defaultState(), action: any): ITodoListReducer => {
  switch (action.type) {
    case actionTypes.SET_NEW_ELEM: {
      return {
        ...state,
        todoList: [...state.todoList, action.newElem],
      };
    }
    default: {
      return state;
    }
  }
};
