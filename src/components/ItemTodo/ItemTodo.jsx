import React from "react";
import { useState } from "react";
import Button from "../Button/Button.jsx";
import Input from "../Input/Input.jsx";

import { FaRegTrashCan } from "react-icons/fa6";

import "../../index.css";

export default function ItemTodo({
  id,
  text,
  status,
  onDeleteTask,
  onTaskStatus,
  onEditTask,
}) {
  const [isEditText, setIsEditText] = useState(false);
  const [changeValue, setChangeValue] = useState(text);

  function handleChangeBtn() {
    setChangeValue(changeValue);
  }

  function handleDeletClick() {
    onDeleteTask(id);
  }

  function handleTaskStatusClick() {
    onTaskStatus(id);
  }

  function handleEditTextTaskClick() {
    setIsEditText(true);
  }

  function handleSaveTextTaskClick() {
    setIsEditText(false);
    setChangeValue(changeValue);
    onEditTask(id, changeValue);
  }

  return (
    <div className={"list-item"}>
      <button
        className={status === "todo" ? "list-item-btn" : "list-item-btn strike"}
        onClick={!isEditText ? handleTaskStatusClick : null}
        key={id}
      >
        {!isEditText ? (
          <span
            onChange={(e) => {
              setIsEditText(false);
              setChangeValue(e.target.value);
            }}
          >
            {!isEditText ? text : changeValue}
          </span>
        ) : (
          <Input
            className={"input-label-edit"}
            value={changeValue}
            onChange={(e) => {
              setIsEditText(true);
              setChangeValue(e.target.value);
            }}
          />
        )}
      </button>
      <Button
        className={"edit-button button"}
        onClick={
          !isEditText ? handleEditTextTaskClick : handleSaveTextTaskClick
        }
        onChange={handleChangeBtn}
      >
        {!isEditText ? "Edit" : "Save"}
      </Button>

      <Button className={"delete-button"} onClick={handleDeletClick}>
        <FaRegTrashCan />
      </Button>
    </div>
  );
}
