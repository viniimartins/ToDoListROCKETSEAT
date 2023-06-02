import styles from "./task.module.css";

export function Task() {
  return (
    <div className={styles.task}>
      <header className={styles.taskHeader}>
        <p className={styles.taskHeader}>Tarefas Criadas</p>

        <p>Cloncluidas</p>
      </header>
      <div></div>
    </div>
  );
}
