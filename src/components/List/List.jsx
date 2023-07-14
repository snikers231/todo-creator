import PropTypes from "prop-types";

import styles from "./List.module.css";
import Button from "../Button/Button";

const List = ({ items, handleDelete }) => {
  console.log(items);

  return (
    <div className={styles.list}>
      {items.map((item) => (
        <div className={styles["list-item"]} key={item.id}>
          <span>{item.text}</span>
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
};

export default List;
