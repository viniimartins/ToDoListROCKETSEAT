import { Header } from "./Components/Header";


import styles from "./App.module.css";
import "./global.css"
import { AddTask } from "./Components/AddTask";

export function App() {
  return (
    <>
      <div>
        <Header />

        <div className={styles.wrapper}>
              < AddTask />

            <main>

            </main>
        </div>
      </div>
    </>
  );
}
