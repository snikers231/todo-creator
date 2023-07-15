import PropTypes from "prop-types";

import Button from "../Button";

import styles from "./List.module.css";

const List = ({ items, handleDelete, handleCrossOut }) => {
  console.log(items);

  return (
    <div className={styles.list}>
      {items.map((item) => (
        <div
          className={styles["list-item"]}
          key={item.id}
          value={item.innerText}
          onClick={() => {
            handleCrossOut(item.innerText)
          }}
        >

          <span className={handleCrossOut ? styles["list-item-strike"] : styles["textTodo"]}>
            {item.text}
          </span>
          <Button
            className={styles["delete-button"]}
            onClick={() => {
              handleDelete(item.id);
            }}
          >
            X
          </Button>
        </div>
      ))}
    </div>
  );
};

List.propTypes = {
  items: PropTypes.array,
  handleDelete: PropTypes.func,
  handleCrossOut: PropTypes.func
};

export default List;