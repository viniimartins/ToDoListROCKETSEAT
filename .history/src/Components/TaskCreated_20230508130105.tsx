import styles from "./TaskCreated.module.css";

export function TaskCreated() {
  return (
    <div className={styles.taskInput}>
      <label class="checkbox">
    <input class="checkbox-input" type="checkbox">
    <span class="checkbox-checkmark-box">
      <span class="checkbox-checkmark"></span>
    </span>
  </label>
      <button>A</button>
    </div>
  );
}
