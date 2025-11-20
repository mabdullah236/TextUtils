import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText]=useState("")
    const handleOnChange=(e)=>{
        // console.log("HandleOnChange function call");
        setText(e.target.value);
    }
    const handleUpClick=()=>{
        // console.log("Uppercase was Clicked");
        let upText=text.toUpperCase();
        setText(upText);
        props.showAlert("Converted to UpperCase!",'success');
    }
    const handleLowClick=()=>{
        let lowText=text.toLowerCase();
        setText(lowText);
        props.showAlert("Converted to LowerCase!",'success');
    }
    const handleCleanClick=()=>{
        setText("");
        props.showAlert("Text Removed!",'success');
    }
    const handleRemoveClick=()=>{
        setText(text.split(/[ ]+/).join(' '));
        props.showAlert("Extra Space Removed!",'success');
    }
    const handleCopyClick=()=>{
        setText(navigator.clipboard.writeText(text));
        setText(text);
        props.showAlert("Text Copied to Clipboard!",'success');
    }
    const handleFirstClick=()=>{
        // setText(text.split(' ').map(word=>{return word.charAt(0).toUpperCase()+word.slice(1);}).join(' '));
        setText(text.replace(/\b\w/g,(l) =>l.toUpperCase()));
        props.showAlert("First Letter of each word has been Capitalized!",'success');
    }
return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':props.mode==='green'?'white': props.mode==='pink'?'#2E003E':'#042743'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'gray': props.mode==='green'?'#06683bff': props.mode==='pink'?'#FFE6FA':'white', color:props.mode==='dark'?'white': props.mode==='green'?'white':props.mode==='pink'?'#be0f9bff':'#042743'}} id="my-text" rows="8"></textarea>
        </div>
        <div className="button">
        <button className='btn mx-2' style={{backgroundColor: props.mode==='green'?'darkgreen': props.mode==='pink'?'#4B0082':'#0d6efd', color:props.mode==='green'?'white':'#fff'}} onClick={handleUpClick}>Convert to UpperCase</button>
        <button className='btn mx-2'style={{backgroundColor: props.mode==='green'?'darkgreen': props.mode==='pink'?'#4B0082':'#0d6efd', color:props.mode==='green'?'white':'#fff'}} onClick={handleLowClick}>Convert to LowerCase</button>
        <button className='btn mx-2' style={{backgroundColor: props.mode==='green'?'darkgreen': props.mode==='pink'?'#4B0082':'#0d6efd', color:props.mode==='green'?'white':'#fff'}} onClick={handleCleanClick}>Clean text</button>
        <button className='btn mx-2' style={{backgroundColor: props.mode==='green'?'darkgreen': props.mode==='pink'?'#4B0082':'#0d6efd', color:props.mode==='green'?'white':'#fff'}} onClick={handleRemoveClick}>Remove Extra Spaces</button>
        <button className='btn mx-2' style={{backgroundColor: props.mode==='green'?'darkgreen': props.mode==='pink'?'#4B0082':'#0d6efd', color:props.mode==='green'?'white':'#fff'}} onClick={handleCopyClick}>Copy To Clipboard</button>
        <button className='btn mx-2' style={{backgroundColor: props.mode==='green'?'darkgreen': props.mode==='pink'?'#4B0082':'#0d6efd', color:props.mode==='green'?'white':'#fff'}} onClick={handleFirstClick}>Convert First Letter Capital</button>
        </div>
    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':props.mode==='green'?'white': props.mode==='pink'?'#2E003E':'#042743'}}>
        <h2>Your Text Summary</h2>
        {/*agr empty hoga tb bhi yeh 1 return kry ga*/}
        {/* <p>{text.split(' ').length} words and {text.length} characters</p> */} 

        {/* yeh multiple spaces ko handle nhi kry ga*/}
        <p>{text.length>0 ? text.split(" ").length:0} words and {text.length} characters</p> 

        {/* yeh multiple spaces ko handle kr skta hy */}
        {/*<p>{text.split(/\s+/).filter((e)=>{return e.length!==0}).length} words and {text.length} characters</p>*/} 

        <p>{0.008 * (text.length>0?text.split(" ").length:0)} Minutes to read</p>

        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something in textbox above to preview it here'}</p>
    </div>
    </>
)
}
