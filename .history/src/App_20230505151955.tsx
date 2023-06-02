import { Header } from "./Components/Header";
import { AddTask } from "./Components/AddTask";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <>
      <div>
        <Header />

        <main className={styles.wrapper}>
          <AddTask />
          <AddTask />

        </main>
      </div>
    </>
  );
}
