import styles from "./task.module.css";

export function Task() {
  return (
    <div className={styles.task}>
      <header className={styles.taskHeader}>
        <div>
          <p className={styles.taskHeaderName1}>Tarefas criadas</p>
          <span className={styles.taskCounter1}>1</span>
        </div>
        <div>
          <p className={styles.taskHeaderNameConcluded}>Concluídas</p>
          <span className={styles.taskCounterconcluded}>1</span>
        </div>
      </header>
      <div></div>
    </div>
  );
}
