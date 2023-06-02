import styles from "./TaskCreated.module.css";

export function TaskCreated() {
  return (
    <div className={styles.taskContent}>
      <div>
        <input
          type="checkbox"
          id="my-checkbox"
          name="my-checkbox"
          style="position: relative; display: inline-block; width: 20px; height: 20px; margin-right: 10px;"
        />
        <span style="display: block; position: absolute; top: 0; left: 0; width: 20px; height: 20px; background-color: #e6f2ff; border: 2px solid #ff69b4;"></span>
      </div>

      <div className={styles.taskText}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </div>
      <button>Excluir</button>
    </div>
  );
}
