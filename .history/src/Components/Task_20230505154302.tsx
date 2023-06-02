import styles from "./task.module.css";

export function Task() {
  return (
    <div className={styles.task}>
      <header className={styles.taskHeader}>
        <div>
        <p className={styles.taskHeaderP1}>Tarefas criadas</p>

        </div>
        <div>
        <p className={styles.taskHeaderP2}>Concluídas</p>

        </div>

      </header>
      <div></div>
    </div>
  );
}
