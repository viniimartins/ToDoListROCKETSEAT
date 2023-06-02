import { Header } from "./Components/Header";
import { AddTask } from "./Components/AddTask";
import { Task, TaskContent } from "./Components/Task";

import styles from "./App.module.css";
import "./global.css";

const tasks: TaskContent[] = [
  {
    key: "task1",
    contend: "task1",
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

          <Task/>
        </main>
      </div>
    </>
  );
}
