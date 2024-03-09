import { useEffect, useState } from "react";

import Input from "../Input/Input.jsx";
import Button from "../Button/Button.jsx";
import List from "../List/List.jsx";
import HeaderCountTodo from "../HeaderCountTodo/HeaderCountTodo.jsx";
import IconThemeSwitcher from "../IconThemeSwitcher/IconThemeSwitcher.jsx";

import "../../index.css";

function sortItems(items, status) {
  return items
    .filter((item) => item.status === status)
    .sort((a, b) => a.time - b.time);
}

//весь блок контейнер с App
export default function TodoList() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("tasks") || "[]")
  );

  const [isEditMode, setIsEditMode] = useState(false);
  const [value, setValue] = useState("");

  const timestamp = Number(new Date());

  const idTask = Math.floor(Math.random() * 1e8);

  const arrTodo = sortItems(items, "todo");
  const arrDone = sortItems(items, "done");

  const todoResult = [...arrTodo, ...arrDone];

  function handleCreateTask() {
    setItems((prevItems) => [
      ...prevItems,
      {
        id: idTask,
        text: value,
        status: "todo",
        time: timestamp,
      },
    ]);
    setIsEditMode(false);
    setValue("");
  }

  function handleEditTask(id, text) {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          return item.text !== text
            ? { ...item, status: "todo", text: text }
            : item;
        }
        return item;
      });
    });
  }

  function handleDeleteTask(id) {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  }

  function handleTaskStatus(id) {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            status: item.status === "todo" ? "done" : "todo",
          };
        }
        return item;
      });
    });
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className={"app"}>
        <IconThemeSwitcher />

        <HeaderCountTodo items={items} />

        <List
          items={todoResult}
          onCreateTask={handleCreateTask}
          onDeleteTask={handleDeleteTask}
          onTaskStatus={handleTaskStatus}
          onEditTask={handleEditTask}
        />

        {isEditMode ? (
          <div>
            <Input
              className={"input-label-create"}
              value={value}
              onChange={(event) => {
                setValue(event.target.value);
              }}
            />
            <Button
              disabled={!value}
              className={"create-todo-btn button"}
              onClick={handleCreateTask}
            >
              Create
            </Button>
            <Button
              className={"hide-btn button"}
              disabled={value}
              onClick={() => {
                setIsEditMode(false);
              }}
            >
              Hide
            </Button>
          </div>
        ) : (
          <>
            <Button
              className={"add-todo-button button"}
              onClick={() => {
                setIsEditMode(true);
              }}
            >
              Add new Todo
            </Button>

            <Button
              className={"delete-todo-button button"}
              onClick={() => {
                setItems([]);
              }}
            >
              Delete all Todo
            </Button>
          </>
        )}
      </div>
    </>
  );
}