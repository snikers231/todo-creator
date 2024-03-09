import React from "react";
import PropTypes from "prop-types";
// import styles from "./Input.module.css";

import "../../index.css";
export default function Input({
  label,
  input,
  onChange,
  value,
  className,
  ...rest
}) {
  return (
    <>
      <label className={className} {...rest}>
        {label && <span className={className}>{label}</span>}
        <input className={className} onChange={onChange} value={value} />
      </label>
    </>
  );
}


Input.propTypes = {
  label: PropTypes.node,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  className: PropTypes.string,
};