import styles from "./TaskCreated.module.css";

export function TaskCreated() {
  return (
    <div className={styles.taskContent}>

        <input type="checkbox" id="my-checkbox" name="my-checkbox" />
      <div className={styles.taskText}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </div>
      <button>Excluir</button>
    </div>
  );
}
