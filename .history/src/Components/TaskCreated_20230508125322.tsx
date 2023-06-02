import styles from "./TaskCreated.module.css";

export function TaskCreated() {
  return (
    <div className={styles.taskInput}>
     <section title=".roundedOne">
    <div class="roundedOne">
      <input type="checkbox" value="None" id="roundedOne" name="check" checked />
      <label for="roundedOne"></label>
    </div>
  </section>
      {/* <button>A</button> */}
    </div>
  );
}
