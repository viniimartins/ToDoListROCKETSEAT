import { Header } from "./Components/Header";
import { AddTask } from "./Components/AddTask";
import { Task } from "./Components/Task";

import { useState } from "react";


import styles from "./App.module.css";
import "./global.css";

export function App() {
  const [tasks, setTasks] = useState<string[]>([]);

  function handleCreateNewTasks(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, newTasks]);
    setNewTasks("");
  }

  return (
    <>
      <div>
        <Header />

        <main className={styles.wrapper}>
          <AddTask />

          <Task />
        </main>
      </div>
    </>
  );
}
