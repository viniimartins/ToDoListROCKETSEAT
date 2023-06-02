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
      <label>
        <input type="checkbox" name="check" />
        <span className="label-text">Item One</span>
      </label>
    </div>
  );
}
