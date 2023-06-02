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
      </label>
      <span className={styles.label}>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </span>
      <button>
        <img src={Trash} alt="trash" />
      </button>
    </div>
  );
}
