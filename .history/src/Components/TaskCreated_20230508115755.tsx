import styles from "./TaskCreated.module.css";

export function TaskCreated() {
  return (
    <div className={styles.taskContent}>
      <label className={styles.container}>
      <p className={styles.taskText}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
        <input type="checkbox" />
        <span className={styles.checkmark}></span>
      </label>
      
      <button>Excluir</button>
    </div>
  );
}
