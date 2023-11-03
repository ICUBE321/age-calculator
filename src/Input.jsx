import "./Input.css";

export function Input({ inputType, input, setInput, inputState }) {
  let labelText = "";
  let placeholderValue = "";

  switch (inputType) {
    case "day":
      placeholderValue = "DD";
      break;
    case "month":
      placeholderValue = "MM";
      break;
    case "year":
      placeholderValue = "YYYY";
      break;

    default:
      break;
  }

  if (inputState == "error") {
    labelText = "This field is required";
  } else if (inputState == "invalid") {
    switch (inputType) {
      case "day":
        labelText = "Must be a valid day";
        break;
      case "month":
        labelText = "Must be a valid month";
        break;
      case "year":
        labelText = "Must be in the past";
        break;

      default:
        break;
    }
  }

  return (
    <div className="inputItem">
      <label
        className={inputState == "" ? "topLabel" : "errorEmpty topLabel"}
        htmlFor={inputType}
      >
        {inputType}
      </label>
      <input
        className={inputState == "" ? "" : "errorInput"}
        type="text"
        id={inputType}
        placeholder={placeholderValue}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <label
        className={
          inputState == "" ? "bottomLabel" : "errorEmpty visibleBottomLabel"
        }
        htmlFor={inputType}
      >
        {labelText}
      </label>
    </div>
  );
}
