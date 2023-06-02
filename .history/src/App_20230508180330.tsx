import { Header } from "./Components/Header";
import { AddTask } from "./Components/AddTask";
import { Task, TaskContent } from "./Components/Task";

import styles from "./App.module.css";
import "./global.css";

const tasks: TaskContent[] = [
  {
    key: "key",
    contend: "task",
    completed: false,
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
              <Task
                key={task.key}
                contend={task.contend}
                completed={task.completed}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
