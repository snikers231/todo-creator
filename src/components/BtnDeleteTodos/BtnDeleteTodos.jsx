import PropTypes from "prop-types";

const BtnDeleteTodos = ({ onClick, className }) => (
  <button onClick={onClick} className={className}>
    Delete All Todos
  </button>

);

BtnDeleteTodos.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default BtnDeleteTodos;
