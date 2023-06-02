import styles from "./task.module.css";

export function Task() {
  return (
    <div className={styles.task}>
      <header class={styles.taskHeader}>
        <p>Tarefas Criadas</p>

        <p>Cloncluidas</p>
      </header>
      <div></div>
    </div>
  );
}
