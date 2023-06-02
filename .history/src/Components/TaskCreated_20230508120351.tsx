import styles from "./TaskCreated.module.css";

export function TaskCreated() {
  return (
    <label className={styles.container}>
      TESTE
      <input type="checkbox" />
      <span className={styles.checkmark}></span>
    </label>
  );
}
