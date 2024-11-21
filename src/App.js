import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router, 
  Routes,
  Route,
} from "react-router-dom";


function App() { 
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (messege ,type) => {
      setAlert({
        msg: messege,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  
  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode is Enabled","success")
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'White';
      showAlert("Light mode is Enbled", "success")
    }
  };

  return (
    <> 
    <Router>   
      <Navbar title="Textutils" el_1="Home" el_2="About" mode={mode} toggleMode={toggleMode}/> 
      <Alert alert = {alert}/>
      <div className="container my-3">
      <Routes> 
          <Route exact path="/about" element={<About mode={mode}/>}/> 
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Space" mode={mode} />} />
      </Routes>   
      </div>
    </Router> 
    </>
  );
}

export default App;
