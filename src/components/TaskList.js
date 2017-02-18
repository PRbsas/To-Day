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
    <div className="task-list">{taskNode}</div>
  );
}
export default TaskList;
