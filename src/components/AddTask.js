import React from 'react';

const AddTask = ({ addTask }) => {
  let input;
  return (
    <div className="input-group">
      <input className="form-control" type="text" ref={node => {
        input = node;
      }} />
      <button className="add-button" onClick={(event) => {
        event.preventDefault();
        addTask(input.value);
        input.value = '';
      }}>
      +
      </button>
    </div>
  );
};

export default AddTask;
