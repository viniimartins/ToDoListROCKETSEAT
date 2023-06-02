import styles from "./TaskCreated.module.css";

export function TaskCreated() {
  return (
    <div className={styles.taskInput}>
     <span>
		<input type="checkbox" name="sports" id="football">
		<label for="football">Football</label>
	</span>
      <button>A</button>
    </div>
  );
}
