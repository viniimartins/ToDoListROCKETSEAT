import { Header } from "./Components/Header";
import { AddTask } from "./Components/AddTask";
import { Task } from "./Components/Task";

import styles from "./App.module.css";
import "./global.css";
import { Counter } from "./Components/Teste";

export function App() {
  return (
    <>
      <div>
        <Header />

        <main className={styles.wrapper}>
          <AddTask />

          <Task />

          <Counter />
        </main>
      </div>
    </>
  );
}
