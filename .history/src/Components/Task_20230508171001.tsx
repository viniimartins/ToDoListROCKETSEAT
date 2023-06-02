import { useState } from "react";
import { TaskCreated } from "./TaskCreated";
// import { TaskNotCreate } from "./TaskNotCreated";

import styles from "./task.module.css";

export interface TaskContent {
  key: string;
  contend: string;
  conclued: boolean;
}

const tasks: TaskContent[] = [
  { key: "content", contend: "This is the first task", conclued: false },
];

export function Task() {
  // const [tasks, setTasks] = useState<string[]>([]);

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
          return (
            <TaskCreated
              key={task.key}
              contend={task.contend}
              conclued={task.conclued}
            />
          );
        })}
      </div>
    </div>
  );
}
