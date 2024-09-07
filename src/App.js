import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Card from './components/Card';
import Alert from './components/Alert';
// import State from './components/State';
// import DerivedState from './components/DerivedState';
// import Toggleswitch from './components/Toggleswitch';

import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert]= useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000)
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      showAlert('Dark Mode has been enabled', 'success')
      document.title = 'TextUtiles - Dark Mode'
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode'
      // }, 2000)
      // setInterval(() => {
      //   document.title = 'Install TextUtils now'
      // },1500)
    } else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('light Mode has been enabled', 'success')
      document.title = 'TextUtiles - Light Mode'
    }
  }
  return (
    <>
  <Router>
    <Navbar title="Avinash Navbar" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
    <div className="container my-3">
    <Alert alert={alert}/>
    <Routes>
     <Route exact path="/about" element={<About />}>
     </Route>
     <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Enter The Text' mode={mode}/>}>
     </Route>
    </Routes>
    {/* <About/> */}
    {/* <Toggleswitch /> */}
    
    {/* <Card/> */}
    {/* <State/>
    <DerivedState /> */}
    </div>
    </Router>
    </>
  );
}

export default App;
