import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a To-Do App", completed: false },
  ]);

  const addTask = (taskText) => {
    if (!taskText.trim()) return;
    const newTask = { id: Date.now(), text: taskText, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: newText } : task
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <Header addTask={addTask} />
      <ToDoList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
}
