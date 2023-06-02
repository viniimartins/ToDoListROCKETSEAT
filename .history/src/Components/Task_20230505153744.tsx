import styles from "./task.module.css";

export function Task() {
  return (
    <div className={styles.task}>
      <header className={styles.taskHeader}>
        <p className={styles.taskHeaderP1}>Tarefas criadas</p>

        <p className={styles.taskHeaderP2}>Cloncluidas</p>
      </header>
      <div></div>
    </div>
  );
}
