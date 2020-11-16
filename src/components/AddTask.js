import { render } from "@testing-library/react";
// import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import {clearUpdated, addToDo, editToDo} from "../actions/actions";

// class AddTask extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: "",
//     };
//   }
//   handleChange = (e) => {
//     this.setState({ text: e.target.value });
//   };
//   addOrEdit = () => {
//     if (this.props.saved) {
//       this.props.edit(this.state);
//       this.setState({ text: "" }, () => this.props.clear());
//     } else {
//       this.props.addNewTodo({
//         text: this.state.text,
//         id: uuidv4(),
//         complete: false,
//       });
//     }
//     this.setState({ text: "" });
//   };
//   componentWillReceiveProps(nextProps) {
//     if(nextProps.saved){
//       this.setState(nextProps.saved);
//     }
//   }
//   render() {
//     return (
//       <div style={{marginLeft:"450px"}}>
//         <input style={{padding:"20px"}}
//           type="text"
//           value={this.state.text}
//           placeholder="add new task ..."
//           onChange={this.handleChange}
//         />
//         <button onClick={this.addOrEdit}>
//           {this.props.saved ? "EDIT" : "Add"}
//         </button>
//       </div>
//     );
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addNewTodo: (todo) => dispatch(addToDo(todo)),
//     edit: (todo) => dispatch(editToDo(todo)),
//     clear: () => dispatch(clearUpdated()),
//   };
// };
// const mapStateToProps = (state) => {
//   return {
//     saved: state.saveReducer,
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(AddTask);


import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const AddTask = () => {
  const [todo, setTodo] = useState({
    text: "",
    id: uuidv4(),
    complete: false,
  })
  const [isEmpty, setIsEmpty] = useState(true)
  const dispatch = useDispatch()
  const saved = useSelector(state => state.saveReducer)

  const addOrEdit = () => {
    if(isEmpty){
      // ADD
      dispatch(addToDo(todo))
      setTodo({
        text: "",
        id: uuidv4(),
        complete: false,
      })
    } else {
      // EDIT
      dispatch(editToDo(todo))
      dispatch(clearUpdated())
      setTodo({
        text: "",
        id: uuidv4(),
        complete: false,
      })
    }
  }

  useEffect(() => {
    if(saved){
      setTodo(saved)
      setIsEmpty(false)
    } else {
      setIsEmpty(true)
    }
  }, [saved])
  return (
    <div style={{marginLeft:"450px"}}>
        <input style={{padding:"20px"}}
          type="text"
          value={todo.text}
          placeholder="add new task ..."
          onChange={e => setTodo({...todo, text: e.target.value})}
        />
        <button onClick={addOrEdit}>
          {saved ? "EDIT" : "Add"}
        </button>
      </div>
  )
}

export default AddTask
