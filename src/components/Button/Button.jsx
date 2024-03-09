import React from "react";
import PropTypes from "prop-types";

import "../../index.css";
export default function Button({
  children,
  onClick,
  onChange,
  className,
  ...rest
}) {
  return (
    <button
      onClick={onClick}
      onChange={onChange}
      className={className}
      {...rest}
    >
      {children}
    </button>
  );
}


Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};