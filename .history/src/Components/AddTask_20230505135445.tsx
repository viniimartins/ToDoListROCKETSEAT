import styles from "./AddTask.module.css";

export function AddTask() {
  return (
    <div className={styles.inputs}>
      <input className={styles.input} type="text" />
      <button>Criar</button>
    </div>
  );
}
