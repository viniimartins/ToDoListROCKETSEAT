import styles from "./TaskCreated.module.css";

export function TaskCreated() {
  return (
    <div className={styles.taskInput}>
      <label className={styles.checkbox}>
        <input className={styles.checkboxInput} type="checkbox" />
        <span className={styles.checkboxCheckmarkBox}>
          <span className={checkboxCheckmark}></span>
        </span>
      </label>
      <button>A</button>
    </div>
  );
}
