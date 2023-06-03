import React, { useState } from 'react'

export default function Textbar(props) {
    //Used React hooks useState
    const [text, setText] = useState("");

   
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleLowClick = () => {
        let textVal = text.toLowerCase();
        setText(textVal);
        props.showAlert("Converted to Lower Case", "success");
    }
    const handleUpClick = () => {
        let textVal = text.toUpperCase();
        setText(textVal);
        props.showAlert("Converted to Upper Case", "success");
    }
    const handleClearTextClick= ()=>{
        let textVal = "";
        setText(textVal);
        props.showAlert("Clear Text", "success");
    }
    const handleExtraSpaceClick=() =>{
        let newText = text.split(/[ ]+/); 
        setText(newText.join(" "));
        props.showAlert("Removed Extra Space", "success");
    }
    return (
        <>
            <div className='container h-100' style={{color: props.mode==='light' ? 'black' :'white'}} >
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} 
                    style={{backgroundColor: props.mode==="light" ? "#aca6a6" : "#b6c1c1",
                    color: props.mode === "light" ? 'white':'black'}
                    } 
                  id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>

                <div className="row">
                    <div className="col-xs-3 ">
                        <div className="text-center ">
                            <button type="button" className="btn btn-primary mx-1 " onClick={handleUpClick}>Change to UpperCase</button>
                            <button type="button" className="btn btn-primary mx-1 " onClick={handleLowClick}>Change to LowerCase</button>
                            <button type="button" className="btn btn-primary mx-1 " onClick={handleClearTextClick}>Clear Text</button>
                            <button type="button" className="btn btn-primary mx-1 " onClick={handleExtraSpaceClick}>Remove extra space</button>
                        </div>
                    </div>
                </div>

            </div>
           

            <div className="container" style={{color: props.mode==='light' ? 'black' :'white'}}>
                <h2>Text summary</h2>
                {/* <p>{text.trim().length === 0 ? 0 : text.trim().split(" ").length} words
                 and {text.length} characters per {text.split(".").length-1} sentence </p> */}
                 <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words
                 and {text.length} characters per {text.split(".").length-1} sentence </p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} 
                 minutes it takes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
