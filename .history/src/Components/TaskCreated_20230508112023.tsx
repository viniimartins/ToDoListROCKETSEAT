import styles from "./TaskCreated.module.css";

export function TaskCreated() {
  return (
    <div className={styles.checkboxButton}>
      <input type="checkbox" />
      <div style={{ flex: 1, marginLeft: "10px" }}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </div>
      <button>Excluir</button>
    </div>
  );
}
