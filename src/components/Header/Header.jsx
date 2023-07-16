import PropTypes from "prop-types";

import styles from "./Header.module.css";

const getText = (items) => {
  if (items.length === 0) {
    return "Nothing created yet";
  }

  const activeTodosCount = items.filter(
    (item) => item.status !== "done"
  ).length;

  if (activeTodosCount > 0) {
    return `${activeTodosCount} todo${activeTodosCount > 1 ? "s" : ""}`;
  }

  return "Everything is done";
};

const Header = ({ items, className }) => {
  return (
    <h1 className={[styles.header, className].filter(Boolean).join(" ")}>
      {getText(items)}
    </h1>
  );
};

Header.propTypes = {
  items: PropTypes.array,
  className: PropTypes.string,
};

export default Header;
