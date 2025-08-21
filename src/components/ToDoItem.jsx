import { useState } from "react";

export default function ToDoItem({ task, toggleComplete, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing && editText.trim()) {
      editTask(task.id, editText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div
      className={`flex items-center justify-between p-3 rounded-lg shadow 
        ${task.completed ? "bg-green-50" : "bg-white"}`}
    >
      {isEditing ? (
        <input
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="flex-1 p-1 border rounded"
        />
      ) : (
        <span
          onClick={() => toggleComplete(task.id)}
          className={`flex-1 cursor-pointer select-none ${
            task.completed ? "line-through text-gray-400" : "text-black"
          }`}
        >
          {task.text} {task.completed && "✅"}
        </span>
      )}

      <div className="flex gap-2 ml-2">
        <button
          onClick={handleEdit}
          disabled={task.completed} // 🔒 disable editing if completed
          className={`px-2 py-1 rounded text-white ${
            task.completed
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-yellow-400 hover:bg-yellow-500"
          }`}
        >
          {isEditing ? "Save" : "Edit"}
        </button>

        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
