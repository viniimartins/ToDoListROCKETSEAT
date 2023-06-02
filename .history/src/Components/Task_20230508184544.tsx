// import { useState } from "react";
import { TaskCreated } from "./TaskCreated";
import { TaskNotCreate } from "./TaskNotCreated";

import styles from "./task.module.css";

export interface TaskContent {
  key: string;
  contend: string;
  conclued: boolean;
}

const tasks: TaskContent[] = [
 
];

export function Task() {
  return (
    <div className={styles.task}>
      <header className={styles.taskHeader}>
        <div className={styles.taskCreated}>
          <p>Tarefas criadas</p>

          <span className={styles.taskCounter}>
            <p>{tasks.length}</p>
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
        {tasks.length === 0 ? (
          <TaskNotCreate />
        ) : (
          tasks.map((tasks) => {
            return (
              <TaskCreated key={tasks.key} />
            );
        )}
      </div>
    </div>
  );
}
