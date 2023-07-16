import { useState } from "react";

import Input from "./components/Input";
import Button from "./components/Button";
import List from "./components/List";
import CountTodo from "./components/CountTodo";

import styles from "./App.module.css";

function App() {
  const [items, setItems] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [value, setValue] = useState("");

  let startText = "Nothing created yet";

  return (
    <>
      <div className={styles.app}>
        {items.length === 0 ? (
          <CountTodo
            text={startText}
            className={styles["start-text"]}
          />) : (
          <CountTodo
            text={`${items.length} todo`}
            className={styles["start-text"]}
          />
        )
        }
        <List
          items={items}
          handleDelete={(deletedId) => {
            setItems((prevItems) =>
              prevItems.filter((item) => item.id !== deletedId)
            );
          }}

          onTaskCompletion={() => {
            items.filter((item) => item.status = "done")
          }}
        />

        {isEditMode ? (
          <div>
            <Input
              value={value}
              onChange={(event) => {
                setValue(event.target.value);
              }}
            />
            <Button
              className={styles["add-style-btn"]}
              onClick={() => {
                setItems((prevItems) => [
                  ...prevItems,
                  { id: prevItems.length, text: value, status: "todo" },
                ]);
                setIsEditMode(false);
                setValue('');
              }}
            >
              Create
            </Button>
          </div>
        ) : (
          <>
            <Button
              className={styles["add-style-btn"]}
              onClick={() => {
                setIsEditMode(true);
              }}
            >
              Add new Todo
            </Button>

            <Button
              className={styles["add-style-btn"]}
              onClick={() => {
                setItems([]);
              }}
            >
              Delete all Todo
            </Button>
          </>
        )
        }
      </div>
    </>
  );
}

export default App;
