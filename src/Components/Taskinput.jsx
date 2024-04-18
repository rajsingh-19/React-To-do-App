import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from "../redux/action";

const Taskinput = () => {
  // useState for manage the value of task input
  const [taskText, setTaskText] = useState('');
  // using useDispatch for adding, updating and managing the states
  const dispatch = useDispatch();
  
  // function for handling the task input  
  const handleChange = (e) => {
    setTaskText(e.target.value);
  };
  
  // function for handling the task addition while enter button is pressed
  const handleSubmit = () => {
    if (taskText.trim() !== '') {
      // adding task to the add task dispatch
      dispatch(addTask(taskText));
      // clearing the input for user to write the task again and again
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
