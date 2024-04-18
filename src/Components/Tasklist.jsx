import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from "../redux/action";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div className="p-l-10 p-r-10">
      <ul>
        {tasks.map((task, index) => (
    <li className='back-292524 flex dir-row justify-center m-b' key={index}>
            <input type="checkbox" className='width-10 text2 inpCheck' />
            <label className='labels text-primary-color width-80 text2'>{task}</label>
            <button className="cursor text2 border-5 back-red width-10 text-primary-color" onClick={() => dispatch(deleteTask(index))}>Del</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
