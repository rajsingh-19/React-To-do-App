import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from "../redux/action";

const Taskinput = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleSubmit = () => {
    if (taskText.trim() !== '') {
      dispatch(addTask(taskText));
      setTaskText('');
    }
  };

  return (
    <div className="Taskinput">
      <input
        type="text"
        placeholder="Enter task"
        value={taskText}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSubmit();
        }}
      />
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
};

export default Taskinput;
