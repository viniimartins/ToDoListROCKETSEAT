import React, { useState } from "react";
import styles from "./TaskCreated.module.css";
import { Trash } from "phosphor-react";

type Props = {
  key: string;
  contend: string;
  conclued: number;
  onDeleteComent: (task: string) => void;
};

export function TaskCreated({
  // key,
  contend,
  conclued,
  onDeleteComent,
}: Props) {
  const [checked, setChecked] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  function handleDeleteTask() {
    onDeleteComent(contend);
  }

  function onClickCountTask() {
    setCountTask(countTask === 0 ? countTask + 1 : countTask - 1);
    conclued = countTask;
    console.log(conclued)
  }

  return (
    <div className={styles.taskCreated}>
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          onClick={onClickCountTask}
        />
        <span className={styles.checkmark} />
        <span className={checked ? styles.labelConclued : styles.label}>
          {contend}
        </span>
      </label>

      <button onClick={handleDeleteTask}>
        <Trash size={20} />
      </button>
    </div>
  );
}
