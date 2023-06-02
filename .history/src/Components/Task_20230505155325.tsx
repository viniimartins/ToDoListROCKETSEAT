import styles from "./task.module.css";

export function Task() {
  return (
    <div className={styles.task}>
      <header className={styles.taskHeader}>
        <div className={styles.taskCreated}>
          <p>Tarefas criadas</p>
          <span className={styles.taskCouter}>
            <p>1</p>
          </span>
        </div>
        <div className={styles.taskConcluded}>
          <p>Concluídas</p>
          <span className={styles.taskCouter}>
            <p></p>
          </span>
        </div>
      </header>

      <div></div>
    </div>
  );
}
