import React from 'react'
import Task from './Task';


const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task
          key={index}
          text={task.text}
          category={task.category}
          onDelete={() => onDeleteTask(task)}/>
      ))}
    </div>
  );
};

export default TaskList;