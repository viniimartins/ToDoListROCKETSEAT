import styles from "./TaskCreated.module.css";

export function TaskCreated() {
  return (
    <div className={styles.taskContent}>
      <input id="12" value="12" content="a" type="checkbox" />
      <label className="checkbox" htmlFor="12" content={content} />
      <div className={styles.taskText}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </div>
      <button>Excluir</button>
    </div>
  );
}
