// import logo from './logo.svg';
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
// import { Switch } from "react-router-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom/cjs/react-router-dom.min";
function App() {

  const [mode, setMode] = useState('light');   // Whether dark mode is enBLED or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = '#042743'           // Body color change 
      showAlert("Dark mode has been enabled", "success")
      // document.title=`TextUtils - Dark Mode`;
      // setInterval(()=>{
      //   document.title=`Install TextUtils Now`;
      // },1000);

      // setInterval(()=>{
      //   document.title=`TextUtils is Amazing Mode`;
      // },3000);
    }
    else {
      setMode('light');
      document.body.style.background = 'white'          // Body color change
      showAlert("light mode has been enabled", "success")
      document.title = `TextUtils - light Mode`;
    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils"  aboutText="About Textutils"/> */}
      {/* <Navbar/> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter the text to Analyze below" mode={mode} />
            </Route>
          </Switch>
          {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} /> */}

          {/* <About/> */}
        </div>
      </Router>
    </>
  );
}

export default App;

