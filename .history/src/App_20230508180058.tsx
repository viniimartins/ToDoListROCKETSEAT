import { Header } from "./Components/Header";
import { AddTask } from "./Components/AddTask";
import { Task } from "./Components/Task";

import styles from "./App.module.css";
import "./global.css";

const tasks: TaskContent[] = [
  {
    key: "key",
    content: "task",
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

          {tasks.map(task => {
            return <Task key={task.key} content={task} />;
          })}
        </main>
      </div>
    </>
  );
}
