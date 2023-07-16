import { useState } from "react";

import Input from "./components/Input";
import Button from "./components/Button";
import List from "./components/List";
import Header from "./components/Header";

import styles from "./App.module.css";

function App() {
  const [items, setItems] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [value, setValue] = useState("");

  const clearList = () => {
    setItems([]);
  };

  const handleAddClick = () => {
    setIsEditMode(true);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleCreateClick = () => {
    setItems((prevItems) => [
      ...prevItems,
      { id: prevItems.length, text: value, status: "todo" },
    ]);
    setIsEditMode(false);
    setValue("");
  };

  const handleComplete = (id) => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            status: "done",
          };
        }

        return item;
      });
    });
  };

  return (
    <div className={styles.app}>
      <Header items={items} />
      <List
        items={items}
        onComplete={handleComplete}
        onDelete={(deletedId) => {
          setItems((prevItems) =>
            prevItems.filter((item) => item.id !== deletedId)
          );
        }}
      />

      {isEditMode ? (
        <div>
          <Input
            className={styles["task-text-input"]}
            value={value}
            onChange={handleInputChange}
          />
          <Button
            className={styles["create-button"]}
            disabled={!value}
            onClick={handleCreateClick}
          >
            Create
          </Button>
        </div>
      ) : (
        <>
          <Button className={styles["add-button"]} onClick={handleAddClick}>
            Add new
          </Button>
          {items.length > 0 && (
            <Button className={styles["clear-all-button"]} onClick={clearList}>
              Remove all
            </Button>
          )}
        </>
      )}
    </div>
  );
}

export default App;
