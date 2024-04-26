import React, { useState } from "react";
import { useStore } from "./store/store";
import TaskList from "./components/Tasks/Tasks";

const App: React.FC = () => {
  const [taskInput, setTaskInput] = useState("");
  const addTask = useStore((state) => state.addTask);
  // const tasks = useStore((state) => state.tasks);

  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      addTask(taskInput);
      setTaskInput("");
    }
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Digite uma tarefa..."
      />
      <button onClick={handleAddTask}>Adicionar Tarefa</button>
      <TaskList />
    </div>
  );
};

export default App;
