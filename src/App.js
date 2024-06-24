import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Footer from './components/Footer';
import Alert from './components/Alert';
// import About from './components/About';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [switchText, setswitchText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);
  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      setswitchText("Disable Dark Mode")
      document.body.style.backgroundColor = 'gray';
      showAlert("Dark Mode has been enabled", "success");
      document.title = "Text Utils React App - By Ganesh Rawat Dark Mode"
      // if : we want to blink the title
      // setTimeout(() => {
      //   document.title = "Intall Text Utils React App - By Ganesh Rawat";        
      // }, 2000);
      // setTimeout(() => {
      //   document.title = "Dark Mode is best"        
      // }, 1500);
    } else {
      setMode("light")
      document.body.style.backgroundColor = 'white'
      setswitchText("Enable Dark Mode")
      showAlert("Light Mode has been enabled", "success");
      document.title = "Text Utils React App - By Ganesh Rawat Light Mode"
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <>
      {/* <Navbar/> */}
      {/* <Navbar title="TextUtils"/> */}
      {/* <Router> */}
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} switchText={switchText} />
        <Alert alert={alert} />
        <div className="container my-2">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About mode={mode} />}>
            </Route> */}
            {/* <Route exact path="/" element={ */}
              <TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode} />
            {/* //   }> */}
            {/* // </Route> */}
          {/* </Routes> */}
        </div>
        <Footer />
      {/* </Router> */}
    </>
  );
}

export default App;

// to run : npm start