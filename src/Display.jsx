import "./Display.css";

export function Display({ displayType, value }) {
  return (
    <p>
      <span>{value < 0 ? "- -" : value}</span>
      {displayType}
    </p>
  );
}
