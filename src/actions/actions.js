import { ADD, DELETE, COMPLETE, EDIT,SAVE, CLEAR } from "./types";
const addToDo = (newTodo) => {
  return {
    type: ADD,
    payload: newTodo,
  };
};
export default addToDo;
export const deleteToDo = (id) => {
  return {
    type: DELETE,
    payload: id,
  };
};
export const completeToDo = (id) => {
  return {
    type: COMPLETE,
    payload: id,
  };
};
export const saveToDo =todo =>{
    return {
        type: SAVE,
        payload:todo
    }
}
export const editToDo =updatedToDo =>{
    return {
        type: EDIT,
        payload:updatedToDo
    }
}
export const clearUpdated =()=>{
    return {
        type: CLEAR,
        
    }
}
