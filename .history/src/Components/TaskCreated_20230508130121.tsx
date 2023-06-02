import styles from "./TaskCreated.module.css";

export function TaskCreated() {
  return (
    <div className={styles.taskInput}>
      <label className="checkbox">
    <input className="checkbox-input" type="checkbox" />
    <span className="checkbox-checkmark-box">
      <span className="checkbox-checkmark"></span>
    </span>
  </label>
      <button>A</button>
    </div>
  );
}
