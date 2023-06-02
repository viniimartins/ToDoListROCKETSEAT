import styles from "./TaskCreated.module.css";

export function TaskCreated() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <input
        type="checkbox"
        id="my-checkbox"
        name="my-checkbox"
        style={{
          position: "absolute",
          width: "20px",
          height: "20px",
          opacity: 0,
          cursor: "pointer",
        }}
        checked={isChecked}
        onChange={toggleCheckbox}
      />
      <span
        style={{
          display: "block",
          position: "absolute",
          top: 0,
          left: 0,
          width: "20px",
          height: "20px",
          backgroundColor: "#e6f2ff",
          border: "2px solid #ff69b4",
        }}
      >
        {isChecked && (
          <span
            style={{
              display: "block",
              position: "absolute",
              top: "2px",
              left: "6px",
              fontSize: "14px",
              color: "#ff69b4",
            }}
          >
            &#x2713;
          </span>
        )}
      </span>
    </div>
  );
}
