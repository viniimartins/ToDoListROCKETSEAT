import { Header } from "./Components/Header";
import { AddTask } from "./Components/AddTask";
import { Task } from "./Components/Task";

import { FormEvent, useState } from "react";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  const [tasks, setTasks] = useState<string[]>([]);

  function handleCreateNewTasks(event: FormEvent, newTasks: string) {
    event.preventDefault();
    console.log(tasks);
    const date: TaskContent = { key: newTasks, contend: newTasks , conclued: false};

    setTasks([...tasks, newTasks]);
  }

  return (
    <>
      <div>
        <Header />

        <main className={styles.wrapper}>
          <AddTask handleCreateNewTasks={handleCreateNewTasks} />

          <Task tasks={tasks} />
        </main>
      </div>
    </>
  );
}
