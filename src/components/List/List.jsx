import PropTypes from "prop-types";
import Button from "../Button";
import styles from "./List.module.css";

const List = ({ items, handleDelete, onTaskCompletion }) => {
  console.log(items);

  return (
    <div className={styles.list}>
      {items.map((item) => (
        <div
          className={styles["list-item"]}
          key={item.id}
          onClick={() => {
            onTaskCompletion();
          }}
        >
          <span className={onTaskCompletion(item.id)}>
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
  onTaskCompletion: PropTypes.func
};

export default List;