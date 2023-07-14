import { useState } from "react";

import Input from "./components/Input";
import Button from "./components/Button";
import List from "./components/List";

import styles from "./App.module.css";

function App() {
  const [items, setItems] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className={styles.app}>
      <List
        items={items}
        handleDelete={(deletedId) => {
          setItems((prevItems) =>
            prevItems.filter((item) => item.id !== deletedId)
          );
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
            onClick={() => {
              setItems((prevItems) => [
                ...prevItems,
                { id: prevItems.length, text: value },
              ]);
              setIsEditMode(false);
              setValue('');
            }}
          >
            Create
          </Button>
        </div>
      ) : (
        <Button
          onClick={() => {
            setIsEditMode(true);
          }}
        >
          Add new
        </Button>
      )}
    </div>
  );
}

export default App;
