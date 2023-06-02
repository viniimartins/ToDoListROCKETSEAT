import { PlusCircle } from "phosphor-react";
import styles from "./AddTask.module.css";
// import { FormEvent } from "react";

export function AddTask() {

  const [ newTasks, setNewTasks ] = state("")


  function handleNewTaskChange(event: React.ChangeEvent<HTMLInputElement>) {
    (event.target.value);
  }

  return (
    <form className={styles.inputs}>
      <input
        className={styles.inputText}
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewTaskChange}
        value={tasks}
      />
      <button type="submit" className={styles.Button} onClick={handleAddTask}>
        <span className={styles.ButtonText}>Criar</span>
        <PlusCircle size={21} />
      </button>
    </form>
  );
}
