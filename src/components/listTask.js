import React from "react";
import { connect } from "react-redux";
import Items from "./items";

const ListTask = (props) => {
  return (
    <div>
      {props.todos.map((el) => (
        <Items todo={el} />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    todos: state.toDoReducer,
  };
};
export default connect(mapStateToProps)(ListTask);
