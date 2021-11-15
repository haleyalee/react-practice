import React, { useState } from 'react'
import './Todo.css';

function Todo() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    const task = {
      id: tasks.length + 1,
      value: newTask,
      status: false
    };
    setTasks([...tasks, task])
    setNewTask('');
  }

  const toggleTask = (task) => {
    const tasksCopy = [...tasks];
    const idx = tasksCopy.indexOf(task);
    tasksCopy[idx].status = !tasksCopy[idx].status;
    setTasks(tasksCopy)
  }

  const handleClear = () => {
    const openTasks = tasks.filter((task) => task.status === false);
    setTasks(openTasks);
  }

  return (
    <div>
      {/* Add a task */}
      <h4>Add a New Task</h4>
      <form id="add-task">
        <input 
          type="text" 
          placeholder="enter new task" 
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button id="add" onClick={handleAddTask}>Add Task</button>
      </form>

      {/* View tasks */}
      <h4>My Todo</h4>
      { (tasks.length > 0)
        ? tasks.map((task) => <Task key={task.id} task={task} toggleTask={toggleTask} />)
        : <div><em>no tasks at the moment :-)</em></div>
      }

      {/* Remove completed */}
      <button id="clear" onClick={handleClear}>Clear Completed Tasks</button>
    </div>
  )
}

export default Todo;

const Task = (props) => {
  const { task, toggleTask } = props;

  return (
    <div className="task">
      <input 
        type="checkbox" 
        checked={task.status} 
        onChange={() => toggleTask(task)}
      />
      <label className={(task.status) ? 'strike' : ''}>{task.value}</label>
    </div>
  )
}