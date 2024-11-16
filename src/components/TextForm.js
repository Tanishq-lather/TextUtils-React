import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleOnClick = (event) => {
    let newText = text.toUpperCase();  
    setText(newText);
    props.showAlert("Text converted to Upper Case","success");
  };

  const handleLoClick = (event) => {
    let newText = text.toLowerCase();  
    setText(newText);
    props.showAlert("Text converted to Lower Case","success");
  };

  const handleClrClick = (event) => {
    let text = ""
    setText(text);
    props.showAlert("Text area Cleared","success");
  };

  const handleRanClick = (event) => {
    let newText = text + "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum porro non est, laboriosam maiores natus assumenda explicabo iure sapiente minima eum accusantium delectus numquam enim repudiandae voluptate commodi sed labore."
    setText(newText);
    props.showAlert("Random text gernated","success");
  };

  const showWords = (event) => {
    if (text === ""){
        return 0;
    } else {
      return text.split(" ").length
    }
  };

  const handleCopy = (event) => {
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard","success");
  }

  const handleExSpace = (event) => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra space removed","success");
  }
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white': '#0a0e0f'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'#0a0e0f':'white', color: props.mode==='dark'?'white':'#0a0e0f'}} id="myBox" rows="8" onChange={handleOnChange} /> 
        </div>
        <button className="btn btn-primary mx-1" onClick={handleOnClick}>Convert to upperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleExSpace}>Remove extra spaces</button>
        <button className="btn btn-primary mx-1" onClick={handleRanClick}>Random Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleClrClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white': '#0a0e0f'}}>
        <h3>Your Text Summary</h3>
        <p>{showWords()} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white': '#0a0e0f'}}>
        <h3>Preview</h3>
        <p>{text.length>0 ?text:'Enter some text to preview'}</p>
    </div>
    </>
  );
}     
