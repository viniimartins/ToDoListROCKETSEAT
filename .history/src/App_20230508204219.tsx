import { Header } from "./Components/Header";
import { AddTask } from "./Components/AddTask";
import { Task, TaskContent } from "./Components/Task";

import { FormEvent, useState } from "react";

import styles from "./App.module.css";
import "./global.css";

export interface PropsDelete {
  tasks: TaskContent[];
  onDeleteComment: (task: TaskContent) => boolean;
}

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

  function deleteComment(tesk: TaskContent) {
    const deleteComent = tasks.filter((comment) => {
      return comment !== tesk;
    });

    setTasks(deleteComent);
  }

  return (
    <>
      <div>
        <Header />

        <main className={styles.wrapper}>
          <AddTask handleCreateNewTasks={handleCreateNewTasks} />

          <Task tasks={tasks} onDeleteComent={deleteComment} />
        </main>
      </div>
    </>
  );
}
