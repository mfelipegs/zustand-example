import React from "react";
import { useStore } from "../../store/store";
import "./Tasks.css";

const TaskList: React.FC = () => {
  const tasks = useStore((state) => state.tasks);
  const removeTask = useStore((state) => state.removeTask);

  const handleRemoveTask = (index: number) => {
    removeTask(index);
  };

  return (
    <div className="task-list">
      <h2>Lista de Tarefas</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleRemoveTask(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
