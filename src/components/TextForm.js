import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleOnClick = (event) => {
    let newText = text.toUpperCase();  
    setText(newText);
    if (text.split(" ").filter((elem) => {return elem.length !== 0}).length === 0){
      props.showAlert("No Text to converted!","warning");
    }
    else{
      props.showAlert("Text converted to Upper Case","success");
    }
  };

  const handleLoClick = (event) => {
    let newText = text.toLowerCase();  
    setText(newText);
    if (text.split(" ").filter((elem) => {return elem.length !== 0}).length === 0){
      props.showAlert("No Text to converted!","warning");
    }
    else{
      props.showAlert("Text converted to Lower Case","success");
    }
  };

  const handleClrClick = (event) => {
    let text = ""
    setText(text);
    if (text.split(" ").filter((elem) => {return elem.length !== 0}).length === 0){
      props.showAlert("No Text to cleared!","warning");
    }
    else{
      props.showAlert("Text area cleard","success");
    }
  };

  const handleRanClick = (event) => {
    let newText = text + "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum porro non est, laboriosam maiores natus assumenda explicabo iure sapiente minima eum accusantium delectus numquam enim repudiandae voluptate commodi sed labore."
    setText(newText);
    props.showAlert("Random text gernated","success");
  };

  const handleCopy = (event) => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    if (text.value.split(" ").filter((elem) => {return elem.length !== 0}).length === 0){
      props.showAlert("No Text to copied!","warning");
    }
    else {
      props.showAlert("Text copied to clipboard","success");
    }
  }

  const handleExSpace = (event) => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));  
    if (text.split(" ").filter((elem) => {return elem.length !== 0}).length === 0){
      props.showAlert("First Write something!","warning");
    }
    else{
      props.showAlert("Extra Space removed","success");
    }
  }

  const handleCapClick = (event) => {
    let newText = [];
    let word = text.split(".");
    word.forEach((word) => {
      let lower = word.toLowerCase();
      newText.push(lower.charAt(0).toUpperCase() + lower.slice(1));
    })
    setText(newText.join(" "));
  }
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white': '#0a0e0f'}}>
        <h2 className='mb-4'>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'#0a0e0f':'white', color: props.mode==='dark'?'white':'#0a0e0f'}} id="myBox" rows="8" onChange={handleOnChange} /> 
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleOnClick}>Convert to upperCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lowerCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCapClick}>Captilize text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExSpace}>Remove extra spaces</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleRanClick}>Random Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClrClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white': '#0a0e0f'}}>
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").filter((elem) => {return elem.length !== 0}).length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").filter((elem) => {return elem.length !== 0}).length} minutes read</p>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white': '#0a0e0f'}}>
        <h3>Preview</h3>
        <p>{text.length>0 ?text:'Enter some text to preview'}</p>
    </div>
    </>
  );
}     
