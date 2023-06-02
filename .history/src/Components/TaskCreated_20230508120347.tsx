import styles from "./TaskCreated.module.css";

export function TaskCreated() {
  return (
    <label className={styles.container}>
      <p>TESTE</p>
      <input type="checkbox" />
      <span className={styles.checkmark}></span>
    </label>
  );
}
