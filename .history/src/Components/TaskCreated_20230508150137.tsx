import React, { useState } from "react";
import styles from "./TaskCreated.module.css";
import Trash from "../assets/trash.svg";

interface Props {
  label: string;
}

export function TaskCreated({ label }: Props) {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div className={styles.taskCreated}>
      <label className={styles.checkbox}>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        <span className={styles.checkmark}></span>
        <span className={styles.label}>Comprar arroz</span>
      </label>

      <button>
        <Trash size={16} />
      </button>
    </div>
  );
}
