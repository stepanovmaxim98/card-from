import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import "./MediaStyles.css";

function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");

  return (
    <div className="App">
      <div className="app-wrapper">
        <div className="card-block">
          <div className="front-card">
            <div className="decoration">
              <div className="big-circle"></div>
              <div className="small-circle"></div>
            </div>
            <div className="card-number">{number || "0000 0000 0000 0000"}</div>
            <div className="card-information">
              <div className="card-user__name">{name || "Name Surname"}</div>
              <div className="card-date">
                <p className="month">
                  {month || "MM"} / {year || "YY"}
                </p>
              </div>
            </div>
          </div>
          <div className="back-card">
            <div className="cv-number">{cvc || "000"}</div>
          </div>
        </div>
        <div className="card-form">
          <form action="">
            <label htmlFor="cardholder-name">Cardholder name</label>
            <input
              type="text"
              placeholder="e.g. Jane Aplessed"
              value={name}
              id="cardholder-name"
              onChange={(event) => setName(event.target.value)}
            />
            <label htmlFor="card-number">Card number</label>
            <input
              type="text"
              placeholder="e.g. 1234 5678 9101 1121"
              id="card-number"
              value={number}
              onChange={(event) => setNumber(event.target.value)}
            />
            <div class="form-container">
              <div class="form-group">
                <label for="exp-date-mm">EXP. DATE (MM/YY)</label>
                <div class="exp-date-group">
                  <div class="form-group">
                    <input
                      type="text"
                      id="exp-date-mm"
                      placeholder="MM"
                      value={month}
                      onChange={(event) => setMonth(event.target.value)}
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      id="exp-date-yy"
                      placeholder="YY"
                      value={year}
                      onChange={(event) => setYear(event.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="cvc">CVC</label>
                <input
                  type="text"
                  id="cvc"
                  placeholder="e.g. 123"
                  value={cvc}
                  onChange={(event) => setCvc(event.target.value)}
                />
              </div>
            </div>

            <Button></Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
