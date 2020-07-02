import React from "react";
import PropTypes from "prop-types";

ToDoList.propTypes = {
  todoArr: PropTypes.array,
  onToDoClick: PropTypes.func,
};

ToDoList.defaultProps = {
  todoArr: [],
  onToDoClick: null,
};
function ToDoList(props) {
  const { todoArr, onToDoClick } = props;
  function handleClick(todo) {
    if (onToDoClick) {
      onToDoClick(todo);
    }
  }
  return (
    <div>
      <ul className="todo-list">
        {todoArr.map((item) => (
          <li key={item.id} onClick={() => handleClick(item)}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
