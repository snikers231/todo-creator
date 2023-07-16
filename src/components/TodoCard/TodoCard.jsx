import PropTypes from "prop-types";

import Button from "../Button";

import styles from "./TodoCard.module.css";

const TodoCard = ({ onComplete, onDelete, text, id, status }) => {
  const handleDeleteClick = () => {
    onDelete(id);
  };

  const handleCardClick = () => {
    onComplete(id);
  };

  return (
    <button
      className={[
        styles["list-item"],
        status === "done" && styles["is-completed"],
      ].filter(Boolean).join(" ")}
      onClick={handleCardClick}
    >
      <span>{text}</span>
      <Button className={styles["delete-button"]} onClick={handleDeleteClick}>
        X
      </Button>
    </button>
  );
};

TodoCard.propTypes = {
  onComplete: PropTypes.func,
  onDelete: PropTypes.func,
  text: PropTypes.string,
  id: PropTypes.number,
  status: PropTypes.oneOf(["done", "todo"]),
};

export default TodoCard;
