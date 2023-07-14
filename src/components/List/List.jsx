import PropTypes from "prop-types";

import styles from "./List.module.css";

const List = ({ items }) => {
  console.log(items);

  return (
    <div className={styles.list}>
      {items.map((item, index) => (
        <span className={styles["list-item"]} key={index}>{item.text}</span>
      ))}
    </div>
  );
};

List.propTypes = {
  items: PropTypes.array,
};

export default List;
