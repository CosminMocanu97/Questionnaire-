import React, { useState } from "react";
import Question from "../components/question";
import Button from "../components/button";
import "../stylesheets/App.scss";

const App: React.FC = () => {
  const questions = {
    first: "What is your name ?",
    second: "What is your age group ?",
    third: "What are your favourite seasons ?",
  };
  const seasons = ["Winter", "Spring", "Summer", "Autumn"];
  const ageGroups = ["0-15 years", "15-64 years", "+65 years"];

  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [seasonList, setSeasonList] = useState<string[]>([]);
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "light"
  );

  const handleCheckboxChange = (key: string) => {
    let list = seasonList;
    if (list.indexOf(key) > -1) {
      list.splice(list.indexOf(key), 1);
    } else {
      list.push(key);
    }
    setSeasonList([...list]);
  };

  const resetForm = () => {
    setShowResult(false);
    setCurrentQuestion(1);
    setName("");
    setAge("");
    setSeasonList([]);
  };

  const changeTheme = (theme: string) => {
    console.log(theme);
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className={theme === "light" ? ["App", "light"].join(" ") : "App"}>
      <div role="theme" className="theme">
        <Button
          type="button"
          label={theme === "light" ? "Dark" : "Light"}
          onClick={() => changeTheme(theme)}
        />
      </div>

      {showResult ? (
        <div className="summary">
          <h3> Summary </h3>

          <p>
            <span> Question: </span> {questions.first} <br />
            <span> Answer: </span> {name}
          </p>
          <p>
            <span> Question: </span> {questions.second} <br />
            <span> Answer: </span> {age}
          </p>
          <p>
            <span> Question: </span> {questions.third} <br />
            <span> Answer: </span> {seasonList.toString()}
          </p>

          <Button type="button" label="Reset" onClick={() => resetForm()} />
        </div>
      ) : (
        <React.Fragment>
          <div className="questionContainer">
            <h3>
              Question {currentQuestion} / {Object.keys(questions).length}
            </h3>
            {currentQuestion === 1 && (
              <>
                <Question
                  type="input"
                  question={questions.first}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div className="buttonsContainer">
                  <Button
                    type="button"
                    disabled={!name && true}
                    onClick={() => setCurrentQuestion(currentQuestion + 1)}
                    label="Next"
                  />
                </div>
              </>
            )}

            {currentQuestion === 2 && (
              <>
                <Question
                  type="radio"
                  options={ageGroups}
                  question={questions.second}
                  state={age}
                  onChange={(e) => setAge(e.target.value)}
                />
                <div className="buttonsContainer">
                  <Button
                    type="button"
                    disabled={!age && true}
                    onClick={() => setCurrentQuestion(currentQuestion + 1)}
                    label="Next"
                  />
                  <Button
                    type="button"
                    onClick={() => setCurrentQuestion(currentQuestion - 1)}
                    label="Back"
                  />
                </div>
              </>
            )}

            {currentQuestion === 3 && (
              <>
                <Question
                  type="checkbox"
                  options={seasons}
                  state={seasonList}
                  question={questions.third}
                  onChange={handleCheckboxChange}
                />
                <div className="buttonsContainer">
                  <Button
                    type="button"
                    disabled={seasonList.length < 1 && true}
                    onClick={() => setShowResult(true)}
                    label="Finish"
                  />

                  <Button
                    type="button"
                    onClick={() => setCurrentQuestion(currentQuestion - 1)}
                    label="Back"
                  />
                </div>
              </>
            )}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
