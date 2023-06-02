import { Header } from "./Components/Header";
import { AddTask } from "./Components/AddTask";
import { Task, TaskContent } from "./Components/Task";

import { FormEvent, useState } from "react";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  const [tasks, setTasks] = useState<TaskContent[]>([]);

  function handleCreateNewTasks(event: FormEvent, newTasks: string) {
    event.preventDefault();
    const date: TaskContent = {
      contend: newTasks,
      conclued: false,
    };

    setTasks([...tasks, date]);
  }

  function deleteTask(commentToDelete: string) {
    // imutabilidade => as variaveis nao sofrem mutacao, nos criamos um novo valor ( um novo espaco na memorio)
    const commentsWithoutDeletedOne = tasks.filter((tasks) => {
      return tasks !== commentToDelete;
    });



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
