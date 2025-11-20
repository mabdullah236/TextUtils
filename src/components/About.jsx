import React from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle]=useState({
    //     color:'black',
    //     backgroundColor:'white'
    // });
    // const [btnText, setBtnText]=useState("Enable Dark Mode");

    // const toggleStyle=()=>{
    //         if(myStyle.color==='black'){
    //             setMyStyle({
    //                 color: 'white',
    //                 backgroundColor: 'black',
    //                 border:'1px solid white'
    //             });
    //             setBtnText("Enable Light Mode");
    //         }
    //         else{
    //             setMyStyle({
    //                 color: 'black',
    //                 backgroundColor:'white'
    //             });
    //             setBtnText("Enable Dark Mode");
    //         }
    // }
    let mainContainer={
        backgroundColor:props.mode==='dark'?'#042743':props.mode==='green'?'green':props.mode==='pink'?'#ff02e2ff':'white',
        color:props.mode==='dark'?'white':props.mode==='green'?'white':props.mode==='pink'?'#2E003E':'black'
    }
    let accordion={
        backgroundColor:props.mode==='dark'?'#042743':props.mode==='green'?'rgb(6, 104, 59)':props.mode==='pink'?'#ddd6d69f':'white',
        color:props.mode==='dark'?'white':props.mode==='green'?'white':props.mode==='pink'?'#2E003E':'black',
        border:props.mode==='dark'?'3px solid #0d6efd':props.mode==='green'?'3px solid darkgreen':props.mode==='pink'?'3px solid #4B0082':'1px solid #dddcdcff'
    }
    let btn={
        backgroundColor:props.mode==='dark'?'rgb(13, 110, 253)':props.mode==='green'?'darkgreen':props.mode==='pink'?'#4B0082':'white',
        color:props.mode==='dark'?'white':props.mode==='green'?'white':props.mode==='pink'?'white':'black',
        border:props.mode==='green'?'1px solid #fff8f827':'1px solid #dddcdc65'
    }
  return (
    // <div className='container my-3' style={myStyle}>
    <div className='container my-3 ' style={mainContainer}>
        <h2>About Us</h2>
        <div className="accordion" id="accordionExample ">
            {/* <div className="accordion-item" style={myStyle}> */}
            <div className="accordion-item fs-5 text" style={accordion}>
                <h2 className="accordion-header">
                <button className="accordion-button fs-5 text " type="button" style={btn} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <strong><code>.accordion-body</code></strong>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item fs-5 text " style={accordion}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed fs-5 text" style={btn} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <strong><code>.accordion-body</code></strong>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item fs-5 text" style={accordion}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed fs-5 text" style={btn} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample " >
                <div className="accordion-body">
                    <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <strong><code>.accordion-body</code></strong>, though the transition does limit overflow.
                </div>
                </div>
            </div>
        </div>
        {/* <div className="container my-2">
            <button type="button" onClick={toggleStyle} className="btn " style={{backgroundColor:props.mode==='green'?'darkgreen':props.mode==='pink'?'#4B0082':'#0d6efd', color:props.mode==='green'?'white':'white'}}>{btnText}</button>
        </div> */}
    </div>
  )
}
