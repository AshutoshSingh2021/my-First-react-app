import React, { useState } from "react";

export default function TextForm(props) {

  const handleUpClick = () => {
    // console.log("Upper case was clicked:" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };

  // const handleCapText = () => {
  //   let newText = text.toUpperCase();
  //   setText(newText);
  // };

  const handleClearText = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Textarea Cleared!", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style = {{color: props.mode==='dark'?'white':'black'}}>
      <h4>{props.heading}</h4>   
      <div className="mb-3 ">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style = {{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black' }}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button type="submit" className="btn btn-primary mx-3" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button type="submit" className="btn btn-primary mx-2" onClick={handleClearText}>
        Clear text 
      </button>
      </div>

      <div className="container my-4" style = {{color: props.mode==='dark'?'white':'black'}}>
        <h4>Your text summary</h4>
      <p> {text.split(" ").length-1} Words and {text.length} Characters</p>
      <p>{0.008 * (text.split(" ").length-1)} minutes read</p>
      <h4>Preview</h4>
      <p>{text.length>0?text: "Enter something in the above textbox to preview it here"}</p>
      </div>
    </>
  );
}
