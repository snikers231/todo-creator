import PropTypes from "prop-types";

import styles from "./Input.module.css";

const Input = ({ label, onChange, value, className, ...rest }) => (
  <label className={className} {...rest}>
    {label && <span className={styles["input-label"]}>{label}</span>}
    <input className={styles["input-element"]} onChange={onChange} value={value} />
  </label>
);

Input.propTypes = {
  label: PropTypes.node,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
