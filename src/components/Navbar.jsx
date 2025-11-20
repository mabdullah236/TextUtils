import React from 'react'
import { Link } from 'react-router-dom'

// export default function Navbar({title='set title here',aboutApp='about text here'}) {
  export default function Navbar(props) {
  return (
<nav 
  className={`navbar navbar-expand-lg navbar-${(props.mode === 'dark' || props.mode==='green') ? 'dark' : 'light'}`} 
  style={{ 
    backgroundColor: props.mode === 'dark' ? 'black' :  
                     props.mode === 'green' ? 'black' : 
                     props.mode==='pink'?'#FFFFFF':
                     '#f8f9fa',   
    color:props.mode==='pink'?'#ff02e2':'dark'                          
  } }
>
  <div className="container-fluid" style={{}}>
    {/* <a className="navbar-brand" href="#">{props.title}</a> */}
    <Link className="navbar-brand" href="#">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/about">{props.aboutApp}</a>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutApp}</Link>
        </li>
      </ul>
      <div className="switch d-flex">
          <div className={`form-check form-switch mx-1 text-${props.mode==='light' || props.mode==='pink' ?'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" onChange={()=>props.toggleMode('dark')} id="darkModeSwitch" checked={props.mode==='dark'}/>
            <label className="form-check-label" >Enable Dark Mode</label>
          </div>
          <div className={`form-check mx-1 form-switch text-${props.mode==='light' || props.mode==='pink' ?'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" onChange={()=>props.toggleMode('green')} id="greenModeSwitch" checked={props.mode==='green'}/>
            <label className="form-check-label" >Enable Green Mode</label>
          </div>
          <div className={`form-check mx-1 form-switch text-${props.mode==='light' || props.mode==='pink' ?'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" onChange={()=>props.toggleMode('pink')} id="pinkModeSwitch" checked={props.mode==='pink'}/>
            <label className="form-check-label" >Enable Pink Mode</label>
          </div>
      </div>
    </div>
  </div>
</nav>
  )
}