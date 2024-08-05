import { useState } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(12);

  const handleLengthChange = (e) => {
    setLength(e.target.value);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Password Generator v2</h1>
      </header>
      <div className='Generator'>
        <div className='Password'>
          <h2>Generated Password</h2>
          <input type='text' readOnly value='Generated Password' />
        </div>
        <div className='Options'>
          <h2>Options</h2>
          <div className='Option'>
            <label>Length</label>
            <input
             type='range' 
             min={8} 
             max={64}
             value={length}
             onChange={handleLengthChange}
             />
             <input
             type='number'
             min={8}
             max={64}
             value={length}
             onChange={handleLengthChange}
             />
          </div>
          <div className='Option'>
            <label>Uppercase</label>
            <input type='checkbox' />
          </div>
          <div className='Option'>
            <label>Lowercase</label>
            <input type='checkbox' />
          </div>
          <div className='Option'>
            <label>Numbers</label>
            <input type='checkbox' />
          </div>
          <div className='Option'>
            <label>Symbols</label>
            <input type='checkbox' />
          </div>
          <button>Generate Password</button>
        </div>
      </div>
    </div>
  );
}

export default App;
