import { Header } from "./Components/Header";
import { AddTask } from "./Components/AddTask";
import { Task } from "./Components/Task";

import styles from "./App.module.css";
import "./global.css";

export interface TaskContent {
  key: string;
  contend: string;
  conclued: boolean;
}

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

          <Task
            key={tasks.key}
            contend={tasks.contend}
            conclued={tasks.conclued}
          />
        </main>
      </div>
    </>
  );
}
