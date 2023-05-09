import React, { useState } from 'react';


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked: "+text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick= () => {
        // console.log("Uppercase was clicked: "+text);
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");

    }

    const handleClearClick=() => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleExtraSpace=() => {
        let newText = text.split(/[ ]+/);
        // let newText = text.trim().split(/ +/).join(' ');
        // setText(newText);
        setText(newText.join(" "));
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);

    }

    const [text, setText] = useState("");
    // text="new text";   // Wrong way to change the state 
    // setText("new text"); // Correct way to change the state
    
    // const placeholder = 'Your msg'
    return ( 
        <>
        <div className='container' style={{color:props.mode===`dark`?`white`:`#042743`}}>
            <h1>{props.heading}</h1>
            <div class="mb-3">
                {/* <label for="myBox" class="form-label"> Example textarea </label> */}
                <textarea className="form-control" value={text} style={{backgroundColor:props.mode===`dark`?`grey`:`white`, color:props.mode===`dark`?`white`:`#042743`}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary " onClick={handleUpClick}> Convert to Uppercase </button>
            <button className="btn btn-danger mx-2 " onClick={handleLoClick}> Convert to Lowercase </button>
            <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear</button>
            <button className='btn btn-primary mx-2' onClick={handleExtraSpace}>Remove space</button>
            {/* <button className="btn btn-danger mx-2 " onClick={handleClearClick}> cleaer </button> */}
        </div>
        <div className="container my-2" style={{color:props.mode===`dark`?`white`:`#042743`}}>
            <h1>Your text summary</h1> 
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minuts read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter somthing in the textbox above to preview it here  " }</p>
        </div>
        </>
    );
}
