import './App.css';

import Navbar from './components/Navbar';
import Textbar from './components/Textbar';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState("null");
  const [color, setColor] = useState("white");


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleColor = (value) => {
    setColor(value);
    document.body.style.backgroundColor = color;
  }

  const darkMode = () => {
    
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      document.title = "TextUtils - Dark Mode";
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      //To change the title of doc dynamcally
      document.title = "TextUtils - Light Mode";
      showAlert("Light mode has been enabled", "success");
    }
    //This will use to add some msgs/warnings in your app after interval
    // just like you see some some install app warning while using some wwebsite

    // setInterval( ()=>{
    //   document.title = "Using TextUtils"
    // }, 2000);
    // setInterval( ()=>{
    //   document.title = "Install update for textUtils"
    // }, 1500);
  }
  const redToggle = () => {
    
    if (mode === "light") {
      setMode("purple");
      document.body.style.backgroundColor = "#560850";
      document.title = "TextUtils - Purple Mode";
      showAlert("Red background has been enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils - Light Mode";
      showAlert("Light mode has been enabled", "success");
    }

  }
  const greenToggle = () => {
    
    if (mode === "light") {
      setMode("green");
      document.body.style.backgroundColor = "#5B9A87";
      document.title = "TextUtils - Green Mode";
      showAlert("Green background has been enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils - Light Mode";
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      {/* <Navbar title="Gauri" aboutText="This is first comp"/>
      <About/> */}


      {/* <Navbar title= "Textutils" mode={mode} toggleMode={toggleMode}/> */}

      <Router>
        <Navbar title="TextUtils" mode={mode} darkMode={darkMode} toggleColor={toggleColor} color={setColor}
          redToggle={redToggle} greenToggle={greenToggle} />
        <Alert alert={alert} />

        

        <Routes>
          <Route path="/about" element={<About mode={mode}/>} />
          {/* <Route path="/my_app"  element={
            <div className="container my-3">
              <Textbar heading="Enter the text here" mode={mode} showAlert={showAlert} />
            </div>}
          /> */}
          <Route path="/"  element={
            <div className="container my-3">
              <Textbar heading="Enter the text here" mode={mode} showAlert={showAlert} />
            </div>}
          />
         </Routes>
      </Router> 

    </>
  );
}

export default App;
