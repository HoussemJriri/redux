import "./App.css";
import React from 'react'
import AddTask from "./components/AddTask";
import ListTask from "./components/listTask";

function App() {
  return (
    <div className="App">
      <AddTask />
      <ListTask/>
    </div>
  );
}

export default App;
