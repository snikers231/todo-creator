import React from "react";
import PropTypes from "prop-types";

import "../../index.css";

let startText = "Nothing created yet";
let endText = "Everything is done";

function getText(items) {
    if (items.length === 0) {
        return startText;
    }

    const activeTodoCount = items.filter((item) => item.status !== "done").length;

    if (activeTodoCount > 0) {
        return `${activeTodoCount} todo${activeTodoCount > 1 ? "s" : ""}`;
    }
    return endText;
}

export default function HeaderCountTodo({ items }) {
    return (
        <div>
            <h1 className={"start-text"}>{getText(items)}</h1>
        </div>
    );
}


HeaderCountTodo.propTypes = {
    className: PropTypes.string
};