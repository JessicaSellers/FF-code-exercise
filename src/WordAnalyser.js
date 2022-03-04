import React, { useState } from "react";
import { getRootWord } from "./getRootWord";
import "./WordAnalyser.css";

export function WordAnalyser() {
  const [value, setValue] = useState("");
  const [rootWords, setRootWords] = useState([]);

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setRootWords(rootWords.concat(getRootWord(value)));
    setValue("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Enter word(s):
          <input type="text" value={value} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <table>
        <tbody>
          <tr>
            <th>Root Word</th>
            <th>Count</th>
            <th>Clear Word</th>
          </tr>
          {[...new Set(rootWords)].map((word, index) => (
            <tr key={index}>
              <td>{word}</td>
              <td>{rootWords.filter((el) => el === word).length}</td>
              <td>
                <button
                  onClick={() =>
                    setRootWords(rootWords.filter((el) => el !== word))
                  }
                  className="remove-btn"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
