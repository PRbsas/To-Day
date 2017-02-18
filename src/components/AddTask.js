import React from 'react';

const AddTask = ({ addTask }) => {
  let input;
  return (
    <div className="input-group">
      <input ref={node => {
        input: node
      }} />
      <button onClick={(event) => {
        event.preventDefault();
        addTask(input.value);
        input.value = '';
      }}>
      Add Task
      </button>
    </div>
  );
};

export default AddTask;
