import styles from "./AddTask.module.css";

export function AddTask() {
  return (
    <div className={styles.inputs}>
      <input className={styles.inputText} type="text" placeholder="" />
      <button className={styles.inputButton}>Criar</button>
    </div>
  );
}
