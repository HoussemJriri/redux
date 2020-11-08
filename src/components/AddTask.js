import { render } from "@testing-library/react";
import React, { Component } from "react";
import { connect } from "react-redux";
import addToDo from "../actions/actions";
import { v4 as uuidv4 } from "uuid";
import { editToDo } from "../actions/actions";
import clearUpdated from "../actions/actions";

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };
  addOrEdit = () => {
    if (this.props.saved) {
      this.props.edit(this.state);
      this.setState({ text: "" });
      this.props.clear();
    }
     else {
      this.props.addNewTodo({
        text: this.state.text,
        id: uuidv4(),
        complete: false,
      });
    }
    this.setState({ text: "" });
  };
  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.saved);
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          placeholder="add new task ..."
          onChange={this.handleChange}
        />
        <button onClick={this.addOrEdit}>
          {this.props.saved ? "EDIT" : "Add"}
        </button>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addNewTodo: (todo) => dispatch(addToDo(todo)),
    edit: (todo) => dispatch(editToDo(todo)),
    clear: () => dispatch(clearUpdated()),
  };
};
const mapStateToProps = (state) => {
  return {
    saved: state.saveReducer,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
