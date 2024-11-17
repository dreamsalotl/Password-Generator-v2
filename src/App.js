import { useState } from "react";
import "./App.css";
import { generatePassword } from "./generator";

function App() {
  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const handleLengthChange = (e) => {
    setLength(e.target.value);
  };

  const handleGeneratePassword = () => {
    const options = {
      includeUppercase,
      includeLowercase,
      includeNumbers,
      includeSymbols,
    };
    const newPassword = generatePassword(length, options);
    setPassword(newPassword);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Password Generator v2</h1>
      </header>
      <div className="Generator">
        <div className="Password">
          <h2>Generated Password</h2>
          <div className="Password-display">{password}</div>
        </div>
        <div className="Options">
          <h2>Options</h2>
          <div className="Option">
            <label>Length</label>
            <input
              type="range"
              min={8}
              max={64}
              value={length}
              onChange={handleLengthChange}
            />
            <input
              type="number"
              min={8}
              max={64}
              value={length}
              onChange={handleLengthChange}
            />
          </div>
          <div className="Option">
            <label>Uppercase</label>
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
            />
          </div>
          <div className="Option">
            <label>Lowercase</label>
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
            />
          </div>
          <div className="Option">
            <label>Numbers</label>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />
          </div>
          <div className="Option">
            <label>Symbols</label>
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
            />
          </div>
          <button onClick={handleGeneratePassword}>Generate Password</button>
        </div>
      </div>
    </div>
  );
}

export default App;
