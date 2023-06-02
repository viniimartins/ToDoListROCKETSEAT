import { useState } from "react";
import { TaskCreated } from "./TaskCreated";
// import { TaskNotCreate } from "./TaskNotCreated";

import styles from "./task.module.css";

interface taskContent {
  contend: string;
  conclued: boolean;
}

export function Task( {contender: string, conclued : boolean} taskContent ) {
  const [tasks, setTasks] = useState<string[]>([]);

  return (
    <div className={styles.task}>
      <header className={styles.taskHeader}>
        <div className={styles.taskCreated}>
          <p>Tarefas criadas</p>

          <span className={styles.taskCounter}>
            <p>0</p>
          </span>
        </div>

        <div className={styles.taskConcluded}>
          <p>Concluídas</p>

          <span className={styles.taskCounter}>
            <p>0</p>
          </span>
        </div>
      </header>

      <div>
        {tasks.map((task) => {
          return <TaskCreated key={task} label="teste" />;
        })}
      </div>
    </div>
  );
}
