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

    setTasks([...tasks, newTasks]);
  }

  return (
    <>
      <div>
        <Header />

        <main className={styles.wrapper}>
          <AddTask handleCreateNewTasks={handleCreateNewTasks} />

          <Task />
        </main>
      </div>
    </>
  );
}
