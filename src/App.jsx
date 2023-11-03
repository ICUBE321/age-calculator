import { useState } from "react";
import "./App.css";
import { Input } from "./Input";
import { Display } from "./Display";

function App() {
  // states for handling input values
  const [dayInput, setDayInput] = useState("");
  const [monthInput, setMonthInput] = useState("");
  const [yearInput, setYearInput] = useState("");

  // states for handling the displayed age values
  const [years, setYears] = useState(-1);
  const [months, setMonths] = useState(-1);
  const [days, setDays] = useState(-1);

  // states for handling the error/invalid state values
  const [dayState, setDayState] = useState("");
  const [monthState, setMonthState] = useState("");
  const [yearState, setYearState] = useState("");

  function calculate() {
    if (isValid()) {
      let todaysDate = new Date();
      let yearsdiff = Math.abs(todaysDate.getFullYear() - parseInt(yearInput));

      if (parseInt(monthInput) > todaysDate.getMonth() + 1) {
        yearsdiff = yearsdiff - 1;
      } else if (
        parseInt(monthInput) == todaysDate.getMonth() + 1 &&
        parseInt(dayInput) > todaysDate.getDay() + 1
      ) {
        yearsdiff = yearsdiff - 1;
      }
      let monthsdiff = Math.abs(
        todaysDate.getMonth() - parseInt(monthInput) + 1
      );
      let daysdiff = Math.abs(todaysDate.getDay() - parseInt(dayInput) + 1);
      setYears(yearsdiff);
      setMonths(monthsdiff);
      setDays(daysdiff);
    } else {
      setYears(-1);
      setMonths(-1);
      setDays(-1);
    }
  }

  function isValid() {
    if (dayInput == "" || monthInput == "" || yearInput == "") {
      setDayState("error");
      setMonthState("error");
      setYearState("error");
      return false;
    } else {
      let noInvalids = true;
      if (!(isDayValid() && isMonthValid() && isYearValid())) {
        noInvalids = false;
      }
      return noInvalids;
    }
  }

  function isDayValid() {
    if (parseInt(dayInput) > 31 || parseInt(dayInput) < 1) {
      setDayState("invalid");
      return false;
    }
    setDayState("");
    return true;
  }

  function isMonthValid() {
    if (parseInt(monthInput) > 12 || parseInt(monthInput) < 1) {
      setMonthState("invalid");
      return false;
    }
    setMonthState("");
    return true;
  }

  function isYearValid() {
    let todaysDate = new Date();
    if (parseInt(yearInput) > todaysDate.getFullYear()) {
      setYearState("invalid");
      return false;
    }
    setYearState("");
    return true;
  }

  return (
    <div className="mainContainer">
      <div className="inputItems">
        <Input
          inputType={"day"}
          input={dayInput}
          setInput={setDayInput}
          inputState={dayState}
        />
        <Input
          inputType={"month"}
          input={monthInput}
          setInput={setMonthInput}
          inputState={monthState}
        />
        <Input
          inputType={"year"}
          input={yearInput}
          setInput={setYearInput}
          inputState={yearState}
        />
      </div>
      <div className="">
        <hr />
      </div>
      <div className="buttonItem">
        <button onClick={calculate}></button>
      </div>
      <div className="displayItems">
        <Display displayType={"years"} value={years} />
        <Display displayType={"months"} value={months} />
        <Display displayType={"days"} value={days} />
      </div>
    </div>
  );
}

export default App;
