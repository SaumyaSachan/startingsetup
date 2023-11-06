// import logo from './logo.svg';
//  the above import logo gets comment out because it's of no use

import React, { useState } from 'react';
import './App.css';
import About from './components/About';


import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';




function App() {

 const [mode, setMode]= useState('light');  // whether  dark mode is 
   //   enable or not


   const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
   }
   const toggleMode= (cls)=>{
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor=' white ';
      showAlert("light mode has been enabled", "success");
    }
  }
  const [alert1 , setAlert]= useState(null);
  const showAlert = (message, type)=>{
        setAlert({
          msg:message,
          type: type
        })
        setTimeout(() => {
          setAlert(null);
        },1500);
  }
   

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    
  <>
 
  <Router>
  <Navbar title="Textutils1" aboutText="About Textutils"  mode={mode}  toggleMode={toggleMode}/>
  <Alert  alert="{alert1}"/>
  <div className="container  my-3">

       <Routes>
          <Route exact  path="/about" element={<About />}/>
            
         
          <Route exact  path="/" element={ <TextForm heading="Textutlils -word counter, character  counter  ,remove extra spaces "  mode={mode} />}/>
         

           
      
        </Routes>

  {/* <TextForm heading="enter the text to analyze" mode={mode} />   */}
 
  {/* <About/>  */}
 
         {/* we comment out the  "about" function */}



  </div>
  </Router>
  </>
  );
}

export default App;
