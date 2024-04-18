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
    <div className="todo-form">
      <input className='border-none outline-none border-5 input bg-transparent text-primary-color text-center m-r10 text3'
        type="text"
        placeholder="Enter task here..."
        value={taskText}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSubmit();
          }
        }}
      />
      <button className="text2 text-primary-color width-10 back-orange cursor border-5" onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default Taskinput;
