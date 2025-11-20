import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import{
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';

function App() {
  const [mode, setMode]=useState('light');
  const [alert, setAlert]=useState(null);

  const toggleMode=(cls)=>{
    if (mode===cls) {
      setMode('light');
      document.body.style.backgroundColor='white';
        showAlert("Light Mode Enabled!",'success');
        document.title='TextUtils - Light Mode';
    }
    else{
      setMode(cls);
      if(cls==='dark'){
        document.body.style.backgroundColor='#042743';
        showAlert("Dark Mode Enabled!",'success');
        document.title='TextUtils - Dark Mode';
        // setInterval(()=>{
        //   document.title='TextUtils is Amazing Mode';
        // }, 2000);
        // setInterval(()=>{
        //   document.title='Install TextUtils Now';
        // }, 1500);
      }
      else if(cls==='green'){
        document.body.style.backgroundColor='green';
        showAlert("Green Mode Enabled!",'success');
        document.title='TextUtils - Green Mode';
      }
      else if(cls==='pink'){
        document.body.style.backgroundColor='#ff02e2ff';
        showAlert("Pink Mode Enabled!",'success');
        document.title='TextUtils - Pink Mode';
      }
    }
  }

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type:type
    });

    setTimeout(()=>{
      setAlert(null);
    }, 1000);
  }
  return (
  <>
  <Router>
    <Navbar title="TextUtils" aboutApp="About TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} mode={mode}/>

    <div className='container my-3'>
        <Routes>
            <Route exact path='/about' element={ <About mode={mode}/>}/>
            <Route exact path='/' element={ <TextForm heading="Enter the text here for Analyzes" mode={mode} showAlert={showAlert}/>}/>
        </Routes>
    </div>
</Router>
    {/* <About mode={mode}/> */}
  </>
  );
}

export default App;
// console.warn("TEST WARNING: Kya console chal raha hai?");