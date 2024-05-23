import React, { useState } from 'react';
import { CATEGORIES, TASKS } from '../data';
import CategoryFilter from './CategoryFilter';
import TaskList from './TaskList';
import NewTaskForm from './NewTaskForm';



const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [tasks, setTasks] = useState(TASKS);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };



  const filteredTasks =
    selectedCategory === 'All'
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);


  return (
    <div className="App">
      <h1>Task List</h1>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}/>

      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
    </div>
  );
};

export default App;