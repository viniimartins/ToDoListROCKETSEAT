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

export function Task(
  { tasks, onDeleteComent }: Props,
  { conclued }: TaskContent
) {
  const [countTask, setCountTask] = useState(0);

  function onClickCountTask() {
    setCountTask(countTask === 0 ? countTask + 1 : countTask - 1);
  }

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
          tasks.map((tasks) => {
            return (
              <TaskCreated
                key={tasks.contend}
                contend={tasks.contend}
                conclued={tasks.conclued}
                onDeleteComent={onDeleteComent}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
