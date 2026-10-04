import { useState } from 'react';
import Task from './Task';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    {id:1, text:'Learn React components', completed: false},
    { id: 2, text: 'Understand state & props', completed: false }
  ]);
  const [newTask, setNewTask] = useState('');

  // Add new task
  const addTask = (e) => {
    e.preventDefault(); // Stop page reload
    if (!newTask.trim()) return;

    const task = {
      id: Date.now(), // Unique ID
      text: newTask,
      completed: false,
    };

    setTasks([...tasks, task]); // Spread operator: keep old + add new
    setNewTask(''); // Clear input
  };
  // Toggle completion status
  const toggleTask = (id) => {
    setTasks(
      tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
    };
   const deleteTask = (id) => {
    setTasks(tasks.filter(task =>
      task.id !== id
    ));
   };

  


 
  return (
    <div style={{ maxWidth: '500px', margin: '2rem auto', padding: '0 1rem' }}>
      <h1>My Tasks</h1>

      {/* Form to add tasks */}
      <form onSubmit={addTask} style={{ marginBottom: '1.5rem' }}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          style={{ padding: '8px', width: '70%', marginRight: '8px' }}
        />
        <button type="submit" style={{ padding: '8px 16px' }}>Add</button>
      </form>

      {/* Conditional: show message if no tasks */}
      {tasks.length === 0 ? (
        <p>No tasks yet! Add one above.</p>
      ) : (
        <>
          {/* Render list of tasks */}
          {tasks.map(task => (
            <Task
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}

          {/* Completed count */}
          <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>
            Completed: {tasks.filter(t => t.completed).length} / {tasks.length}
          </p>
        </>
      )}
    </div>
  );
}

export default App;
