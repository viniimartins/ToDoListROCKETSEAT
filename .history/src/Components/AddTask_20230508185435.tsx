import { PlusCircle } from "phosphor-react";
import styles from "./AddTask.module.css";
import { ChangeEvent, FormEvent, useState } from "react";

export function AddTask() {
  const [newTasks, setNewTasks] = useState("");

  
  function handleTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTasks(event.target.value);
  }

  return (
    <form onSubmit={handleCreateNewTasks} className={styles.inputs}>
      <input
        className={styles.inputText}
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleTaskChange}
        value={newTasks}
        required
      />
      <button type="submit" className={styles.Button}>
        <span className={styles.ButtonText}>Criar</span>
        <PlusCircle size={21} />
      </button>
    </form>
  );
}
