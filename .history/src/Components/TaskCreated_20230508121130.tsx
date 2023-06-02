import styles from "./TaskCreated.module.css";

export function TaskCreated() {
  return (
    <div className={styles.taskInput}>
      <label className={styles.taskCheckBox}>
        TESTE
        <input type="checkbox" />
        <span className={styles.checkmark}></span>
      </label>
      {/* <button>A</button> */}
    </div>
  );
}
