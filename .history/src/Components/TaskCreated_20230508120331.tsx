import styles from "./TaskCreated.module.css";

export function TaskCreated() {
  return (
    <label className={styles.container}>

    <input type="checkbox" />
    <span className={styles.checkmark}></span>
  </label>
  );
}
