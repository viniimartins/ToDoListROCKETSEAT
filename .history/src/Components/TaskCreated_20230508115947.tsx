import styles from "./TaskCreated.module.css";

export function TaskCreated() {
  return (
    <div className={styles.taskContent}>
      <label className={styles.container}>
        <span className={styles.checkmark}></span>
        <p>Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.</p>
      </label>
      <div className={styles.taskText}>
        
      </div>
      <button>Excluir</button>
    </div>
  );
}
