import { Header } from "./Components/Header";
import { AddTask } from "./Components/AddTask";
import { Task } from "./Components/Task";

import styles from "./App.module.css";
import "./global.css";

export function App() {

  interface Task {
    id: string;
    content: string;
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
