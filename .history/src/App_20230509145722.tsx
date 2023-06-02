import { Header } from "./Components/Header";
import { AddTask } from "./Components/AddTask";
import { Task, TaskContent } from "./Components/Task";

import { FormEvent, useState } from "react";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  const [tasks, setTasks] = useState<TaskContent[]>([]);
  const [countTask, setCountTask] = useState(0);

  function handleCreateNewTasks(event: FormEvent, newTasks: string) {
    event.preventDefault();
    const date: TaskContent = {
      contend: newTasks,
      conclued: 0,
    };

    setTasks([...tasks, date]);
  }

  function deleteComment(taskContent: string) {
    const deleteComent = tasks.filter((task) => {
      return task.contend !== taskContent;
    });
    setTasks(deleteComent);
  }

  function onClickCountTask(conclued: number) {
    console.log(conclued)
    const count = conclued === 0 ? 0 : 10
    setCountTask(count);
  }

  return (
    <>
      <div>
        <Header />

        <main className={styles.wrapper}>
          <AddTask handleCreateNewTasks={handleCreateNewTasks} />

          <Task
            tasks={tasks}
            onDeleteComent={deleteComment}
            onClickCountTask={onClickCountTask}
            countTask={countTask}
          />
        </main>
      </div>
    </>
  );
}
