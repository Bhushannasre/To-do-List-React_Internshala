import ToDoItem from "./ToDoItem";

export default function ToDoList({ tasks, toggleComplete, deleteTask, editTask }) {
  return (
    <div className="w-full max-w-md space-y-3">
      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
}
