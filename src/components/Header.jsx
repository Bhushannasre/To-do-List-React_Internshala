import { useState } from "react";

export default function Header({ addTask }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(input);
    setInput("");
  };

  return (
    <header className="mb-6 w-full max-w-md">
      <h1 className="text-3xl font-bold text-center mb-4">To-Do List</h1>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded-lg"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add
        </button>
      </form>
    </header>
  );
}
