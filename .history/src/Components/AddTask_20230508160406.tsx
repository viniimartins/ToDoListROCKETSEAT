import { PlusCircle } from "phosphor-react";
import styles from "./AddTask.module.css";

export function AddTask() {

  function handleNewTask(){
    console.log("clicked");
  }


  return (
    <div className={styles.inputs}>
      <input
        className={styles.inputText}
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewTask}
      />
      <button className={styles.Button}>
        <span className={styles.ButtonText}>Criar</span>
        <PlusCircle size={21} />
      </button>
    </div>
  );
}
