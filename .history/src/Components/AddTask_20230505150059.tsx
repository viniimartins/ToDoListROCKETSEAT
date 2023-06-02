import { PlusCircle } from "phosphor-react";
import styles from "./AddTask.module.css";

export function AddTask() {
  return (
    <div className={styles.inputs}>
      <input
        className={styles.inputText}
        type="text"
        placeholder="Adicione uma nova tarefa"
      />
      <button className={styles.Button}>
      <PlusCircle  size={16} />
      <span className={styles.ButtonText} style={{ fontSize: '16px' }}>
        Criar
      </span>
    </button>
    </div>
  );
}
