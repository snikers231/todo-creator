import React, { Component } from "react";

import "./App.module.css";
import "./index.css";
import TodoList from "./components/TodoList/TodoList.jsx";

class App extends Component {
  render() {
    return <TodoList />;
  }
}
export default App;
