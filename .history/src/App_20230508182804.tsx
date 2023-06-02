import { Header } from "./Components/Header";
import { AddTask } from "./Components/AddTask";
import { Task, TaskContent } from "./Components/Task";

import styles from "./App.module.css";
import "./global.css";





export function App() {


  
  return (
    <>
      <div>
        <Header />

        <main className={styles.wrapper}>
          <AddTask />

          {tasks.map((task) => {
            return (
              <Task
                key={task.key}
                contend={task.contend}
                conclued={task.conclued}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
