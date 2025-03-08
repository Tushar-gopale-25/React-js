import React,{useState} from 'react'



export default function TextForm(props) {
    const handelUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handelLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLocaleLowerCase();
        setText(newText);
    }
    const handelOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here2');

  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handelOnChange} id="mybox" rows="8"></textarea>
      </div>
      <button type="submit" className="btn btn-primary mx-2" onClick={handelUpClick} >Convert to Uppercase</button>
      <button type="submit" className="btn btn-primary mx2" onClick={handelLoClick} >Convert to Lowercase</button>
    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p> {text.split(" ").length} words and {text.length} characters</p>
      <p> {0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
      </div>
    </>
  );
}
