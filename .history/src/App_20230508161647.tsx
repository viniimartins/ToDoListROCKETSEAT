import { Header } from "./Components/Header";
import { AddTask } from "./Components/AddTask";
import { Task } from "./Components/Task";

import styles from "./App.module.css";
import "./global.css";

interface TaksContent {
  id: string;
  content: string;
}

export function App() {
  const [tasks, addTask] = useState([]);

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
