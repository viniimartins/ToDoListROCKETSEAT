import React, { useState } from "react";
import styles from "./TaskCreated.module.css";
import { Trash } from "phosphor-react";

type Props = {
  key: string;
  contend: string;
  conclued: boolean;
  onConclued: (task: boolean) => void;
  onDeleteComent: (task: string) => void;
};

export function TaskCreated({
  // key,
  contend,
  // conclued
  onDeleteComent,
  onConclued,
}: Props) {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    onConclued(event.target.checked ? true : false);
  };

  function handleDeleteTask() {
    onDeleteComent(contend);
  }

  return (
    <div className={styles.taskCreated}>
      <label className={styles.checkbox}>
        <input type="checkbox" checked={checked} onChange={handleChange} />
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
