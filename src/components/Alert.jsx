import React from 'react'

function Alert(props) {
    const capitalize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div style={{height:'50px'}}>
      {props.alert &&  <div>
          <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={{backgroundColor:props.mode==='pink'?'#7c026eff':props.mode==='green'?'rgb(6, 104, 59)':props.mode==='dark'?'#001636ff':props.alert.type, color: props.mode==='pink'?'#fff':props.mode==='green'?'#fff': props.mode==='dark'?'#fff':'dark'}}>
              <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg} 
          </div>
      </div>}
    </div>
  )
}

export default Alert
