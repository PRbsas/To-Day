import React from 'react';

const TaskItem = ({ taskItem, removeItem }) => {
  return (
      <a href='#' className="task-item" onClick={() =>
        { removeItem(taskItem.id) }}>
        { taskItem.text }
      </a>
  );
}
export default TaskItem;
