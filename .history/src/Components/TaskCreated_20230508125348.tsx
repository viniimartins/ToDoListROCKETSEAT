import styles from "./TaskCreated.module.css";

export function TaskCreated() {
  return (
    <div className={styles.taskInput}>
      <section title={styles.roundedOne}>
        <div className={styles.roundedOne}>
          <input
            type="checkbox"
            value="None"
            id="roundedOne"
            name="check"
            checked
          />
          <label></label>
        </div>
      </section>
      {/* <button>A</button> */}
    </div>
  );
}
