import { Header } from "./Components/Header";
import { AddTask } from "./Components/AddTask";
import { Task, TaskContent } from "./Components/Task";

import styles from "./App.module.css";
import "./global.css";
import { TaskCreated } from "./Components/TaskCreated";

const tasks: TaskContent[] = [
  {
    key: "key",
    contend: "task",
    conclued: false,
  },
  {
    key: "key",
    contend: "task",
    conclued: false,
  },
];

export function App() {
  return (
    <>
      <div>
        <Header />

        <main className={styles.wrapper}>
          <AddTask />

          {tasks.map((task) => {
            return (
              <TaskCreated
                key={task.key}
                contend={task.contend}
                conclued={task.conclued}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
