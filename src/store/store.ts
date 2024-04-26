import { create } from "zustand";

type State = {
  tasks: string[];
  addTask: (task: string) => void;
  removeTask: (index: number) => void;
};

export const useStore = create<State>((set) => ({
  tasks: [],
  addTask: (task) => {
    console.log("Adicionando tarefa:", task);
    set((state) => ({ tasks: [...state.tasks, task] }));
  },
  removeTask: (index) => {
    console.log("Removendo tarefa:", index);
    set((state) => ({ tasks: state.tasks.filter((_, i) => i !== index) }));
  },
}));
