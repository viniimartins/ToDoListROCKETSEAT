import React, { useState } from "react";
import styles from "./Checkbox.module.css";

interface Props {
  label: string;
}

function Checkbox({ label }: Props) {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <label className={styles.checkbox}>
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <span className={styles.checkmark}></span>
      <span className={styles.label}>{label}</span>
    </label>
  );
}

export default Checkbox;
