// function for adding and storing a task
export const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: task,
});

// function for handling the delete task  
export const deleteTask = (index) => ({
    type: 'DELETE_TASK',
    payload: index,
});
  