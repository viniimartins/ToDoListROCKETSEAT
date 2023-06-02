import { Header } from "./Components/Header";
import { AddTask } from "./Components/AddTask";
import { Task } from "./Components/Task";

import styles from "./App.module.css";
import "./global.css";


export function App() {

  const [tasks, setTaks] = useState([1, 2, 4, 5]);



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
