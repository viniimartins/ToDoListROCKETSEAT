import { Header } from "./Components/Header";
import { AddTask } from "./Components/AddTask";
import { Task } from "./Components/Task";

import styles from "./App.module.css";
import "./global.css";

interface TaskContent {
  key: string;
  contend: string;
  conclued: boolean;
}

const tasks: TaskContent[] = [
  ["oi"]
];

export function App() {
  return (
    <>
      <div>
        <Header />

        <main className={styles.wrapper}>
          <AddTask />

          <Task key={key} contend={contend} conclued={conclued} />
        </main>
      </div>
    </>
  );
}
