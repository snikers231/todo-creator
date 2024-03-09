import React from "react";
import PropTypes from "prop-types";
import ItemTodo from "../ItemTodo/ItemTodo.jsx";

// import styles from "./List.module.css";
import "../../index.css";
export default function List({
  items,
  onCreateTask,
  onDeleteTask,
  onTaskStatus,
  onEditTask,
}) {

  return (
    <div className={"list"}>
      {items.map((item) => (
        <ItemTodo
          id={item.id}
          key={item.id}
          text={item.text}
          status={item.status}
          time={item.time}
          onCreateTask={onCreateTask}
          onDeleteTask={onDeleteTask}
          onTaskStatus={onTaskStatus}
          onEditTask={onEditTask}
        />
      ))}
    </div>
  );
}


List.propTypes = {
  items: PropTypes.array,
  onCreateTask: PropTypes.func,
  onDeleteTask: PropTypes.func,
  onTaskStatus: PropTypes.func,
  onEditTask: PropTypes.func
};

// 37-40стр тип - функция?