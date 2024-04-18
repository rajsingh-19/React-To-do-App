import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from "../redux/action";

const TaskList = () => {
  // using useSelector for getting the tasks entered by the user 
  const tasks = useSelector((state) => state.tasks);
  // using useDispatch for adding, updating and managing the states
  const dispatch = useDispatch();

  return (
    <div className="p-l-10 p-r-10">
      <ul>
        {tasks.map((task, index) => (
    <li className='back-292524 flex dir-row justify-center m-b' key={index}>
            <input type="checkbox" className='width-10 text2 inpCheck cursor' />
            <label className='labels text-primary-color width-80 text2'>{task}</label>
            <button className="cursor text2 border-5 back-red width-10 text-primary-color" onClick={() => dispatch(deleteTask(index))}>Del</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
