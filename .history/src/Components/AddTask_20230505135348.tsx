import styles from "./AddTask.module.css";

export function AddTask() {
  return (
    <div className={styles.inputs}>
      <input type="text" />
      <button title="Criar" />
    </div>
  );
}
