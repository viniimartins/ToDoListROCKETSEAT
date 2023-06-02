export function Counter() {
  return (
    <div className="Counter" style={{ width: "25px", height: "25px" }}>
      <button className="CounterButton" onClick={handleIncrement}>
        +
      </button>
      <span className="CounterValue">1</span>
      <button className="CounterButton" onClick={handleDecrement}>
        -
      </button>
    </div>
  );
}
