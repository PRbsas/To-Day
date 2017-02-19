import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ taskItems, removeItem }) => {
  const taskNode = taskItems.map((taskItem) => {
    return (
      <TaskItem
        taskItem={taskItem}
        key={taskItem.id}
        removeItem={removeItem}
      />
    )
  });
  return (
    <ul className="task-list">{taskNode}</ul>
  );
}
export default TaskList;
