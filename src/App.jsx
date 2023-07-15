import { useState } from "react";

import Input from "./components/Input";
import Button from "./components/Button";
import List from "./components/List";
import BtnDeleteTodos from "./components/BtnDeleteTodos";
import CountTodo from "./components/CountTodo";

import styles from "./App.module.css";

function App() {
  const [items, setItems] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);

  return (
    <>
      {items.length === 0 ? (
        <CountTodo
          text='Nothing created yet'
          className={styles.startText}
        />) : (
        <CountTodo
          count={count}
          text=' todo'
          className={styles.startText}
        />
      )
      }
      {items.length >= 2 &&
        <div>
          <BtnDeleteTodos
            className={styles.btnDelet}
            onClick={() => {
              setItems([]);
              setCount(0);
            }}
          />
        </div>
      }

      <div className={styles.app}>
        <List
          items={items}
          handleDelete={(deletedId) => {
            setItems((prevItems) =>
              prevItems.filter((item) => item.id !== deletedId)
            );
            setCount(count - 1);
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
              className={styles.addStyleBtn}
              onClick={() => {
                setItems((prevItems) => [
                  ...prevItems,
                  { id: prevItems.length, text: value },
                ]);
                setIsEditMode(false);
                setValue('');
                setCount(count + 1);
              }}
            >
              Create
            </Button>
          </div>
        ) : (
          <Button
            className={styles.addStyleBtn}
            onClick={() => {
              setIsEditMode(true);
            }}
          >
            Add new TODO
          </Button>
        )}
      </div >
    </>
  );
}

export default App;
