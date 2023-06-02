import React, { useState } from "react";
import styles from "./TaskCreated.module.css";

interface Props {
  label: string;
}

export function TaskCreated({ label }: Props) {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <label className={styles.checkbox}>
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <span className={styles.checkmark}></span>
      <span className={styles.label}>TESTE</span>
    </label>
  );
}
