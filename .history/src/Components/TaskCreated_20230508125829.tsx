import styles from "./TaskCreated.module.css";

export function TaskCreated() {
  return (
    <div className={styles.taskInput}>
      <label>
        <input type="checkbox" name="check" />
        <span className="label-text">TESTE</span>
      </label>
      <button>A</button>

    </div>
  );
}
