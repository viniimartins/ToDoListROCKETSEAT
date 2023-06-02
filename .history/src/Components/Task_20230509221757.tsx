// import { useState } from "react";
import { useState } from "react";
import { TaskCreated } from "./TaskCreated";
import { TaskNotCreate } from "./TaskNotCreated";

import styles from "./task.module.css";

export interface TaskContent {
  contend: string;
  conclued: number;
}

type Props = {
  tasks: TaskContent[];
  onDeleteComent: (task: string) => void;
};

export function Task({ tasks, onDeleteComent }: Props) {
  // { conclued }: TaskContent
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

          <span className={styles.taskCounterConclued}>
            <p>
              {} de {tasks.length}
            </p>
          </span>
        </div>
      </header>

      <div>
        {tasks.length === 0 ? (
          <TaskNotCreate />
        ) : (
          tasks.map((task) => {
            return (
              <TaskCreated
                key={task.contend}
                contend={task.contend}
                conclued={task.conclued}
                onDeleteComent={onDeleteComent}
                tasks={task}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
