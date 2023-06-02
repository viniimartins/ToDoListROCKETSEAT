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

          <Task
            key={array.key}
            contend={array.contend}
            conclued={array.conclued}
          />
        </main>
      </div>
    </>
  );
}
