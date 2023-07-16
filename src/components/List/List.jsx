import PropTypes from "prop-types";

import TodoCard from "../TodoCard";

import styles from "./List.module.css";

const List = ({ items, onDelete, onComplete }) => {
  return (
    <div className={styles.list}>
      {items.map((item) => (
        <TodoCard
          key={item.id}
          onDelete={onDelete}
          onComplete={onComplete}
          text={item.text}
          id={item.id}
          status={item.status}
        />
      ))}
    </div>
  );
};

List.propTypes = {
  items: PropTypes.array,
  onDelete: PropTypes.func,
  onComplete: PropTypes.func,
};

export default List;
