import PropTypes from "prop-types";

const CountTodo = ({ count, text, className }) => (
    <div>
        <p className={className}>{count}{text}</p>
    </div>
);

CountTodo.propTypes = {
    className: PropTypes.string
};

export default CountTodo;