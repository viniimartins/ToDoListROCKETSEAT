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
      <button className={styles.inputButton}>
        Criar <PlusCircle  size={16}/>
      </button>
      <button className="{">
      <PlusCircle  size={16} />
      <span className="ButtonText" style={{ fontSize: '16px' }}>
        Criar
      </span>
    </button>
    </div>
  );
}
