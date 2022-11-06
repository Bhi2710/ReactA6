import './App.css';
import { useState } from 'react';


function App() {

 const [isLight, setIsLight] = useState(true)


  return (
    <div className={isLight === true ? "light_bg" : "dark_bg"}>
      <div className="Main">
        <div className="App">
          <div className="header_container">
            <h1 className={isLight === true ? "dark_text" : "light_text"}>Overreacted</h1>
            <button 
            onClick={_ => {
              setIsLight((prevValue) => {
                return !prevValue
              })
            }}>Toggle</button>
          </div>
          <div className="text_container">
            <div className="text">
              <h2>The WET Codbase</h2>
              <p className={isLight === true ? "dark_text" : "light_text"}>Sunday 4th, 2020 11 min read</p>
              <p className={isLight === true ? "dark_text" : "light_text"}>Come waste your time with me</p>
            </div>
            <div className="text">
              <h2>Goodby, Clean Code</h2>
              <p className={isLight === true ? "dark_text" : "light_text"}>Friday 22nd, 2019 5 min read</p>
              <p className={isLight === true ? "dark_text" : "light_text"}>Let clean code guide you. Then let it go.</p>
            </div>
            <div className="text">
              <h2>My Decade In Review</h2>
              <p className={isLight === true ? "dark_text" : "light_text"}>Saturday 11th, 2018 5min read</p>
              <p className={isLight === true ? "dark_text" : "light_text"}>A personal reflection</p>
            </div>
            <div className="text">
              <h2>What Are The React Team Principles</h2>
              <p className={isLight === true ? "dark_text" : "light_text"}>Thursday 4th, 2015 5 min read</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
