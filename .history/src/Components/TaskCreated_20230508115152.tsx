import styles from "./TaskCreated.module.css";

export function TaskCreated() {
  return (
    <div className={styles.taskContent}>
      <div className={styles.checkboxCustom}>
        <input type="checkbox" id="my-checkbox" name="my-checkbox" />
        <span className={styles.checkmark}></span>
      </div>
      <div className={styles.taskText}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </div>
      <button>Excluir</button>
    </div>
  );
}
