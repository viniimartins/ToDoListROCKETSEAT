import { PlusCircle } from "phosphor-react";
import styles from "./AddTask.module.css";
import { FormEvent, useState } from "react";
// import { FormEvent } from "react";

export function AddTask() {
  const [tasks, setTasks] = useState<string[]>([]);

  const [newTasks, setNewTasks] = useState("");

  function handleCreateNewTasks(event: FormEvent) {
    event.preventDefault();
    setTasks([...tasks, newTasks]);
    setNewTasks("");
  }

  function handleAddTask() {
    setNewTasks([...tasks, setNewTasks]);
  }

  return (
    <form className={styles.inputs}>
      <input
        className={styles.inputText}
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewTaskChange}
        value={newTasks}
      />
      <button type="submit" className={styles.Button} onClick={handleAddTask}>
        <span className={styles.ButtonText}>Criar</span>
        <PlusCircle size={21} />
      </button>
    </form>
  );
}
