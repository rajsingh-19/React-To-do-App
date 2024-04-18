import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from "../redux/action";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div className="TaskList">
      <h2>Tasks:</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => dispatch(deleteTask(index))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
