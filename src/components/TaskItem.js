import React from 'react';

const TaskItem = ({ taskItem, removeItem }) => {
  return (
      <li className="task-item">
        { taskItem.text }
        <button
        className="remover"
        onClick={() =>
          { removeItem(taskItem.id) }}>
            x
          </button>
      </li>



  );
}
export default TaskItem;
