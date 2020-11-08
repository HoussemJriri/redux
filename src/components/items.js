import React from "react";
import { connect } from "react-redux";
import { deleteToDo, completeToDo, saveToDo } from "../actions/actions";

const Items = (props) => {
  return (
    <div>
      <p className={props.todo.complete ? 'done' : undefined}>
        {props.todo.text}
      </p>
      <button onClick={() => props.delete(props.todo.id)}>Delete</button>
      <button onClick={() => props.complete(props.todo.id)}>
        {props.todo.complete ? "Undo" : "Complete"}
      </button>
      <button onClick={() => props.save(props.todo)}>Edit</button>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    delete: (id) => dispatch(deleteToDo(id)),
    complete: (id) => dispatch(completeToDo(id)),
    save: (todo) => dispatch(saveToDo(todo)),
  };
};
export default connect(null, mapDispatchToProps)(Items);
