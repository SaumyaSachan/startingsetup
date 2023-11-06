// typr-  rfc   to get react function based code
import React,{useState} from 'react'



export default function TextForm(props) {

      // the below statement is 'hook' which is used to update the text

  const [text,setText]= useState('enter the text');    
       
    // when we want to change some text the we write,   setText("abcddf");
   // so instead of 'enter the text' it shows 'abcddf'  
   //  setText("abcddf");
   
   const handleUpClick = () =>{
    // console.log("Uppercase was clicked"+text);
    let newText =text.toUpperCase();
    setText(newText)
   }

   const handleloClick = () =>{
    let newText =text.toLowerCase();
    setText(newText)
   }

   const handleOnChange =(event)=>{
    // console.log("On Change ");
    setText(event.target.value)
   }
   


  //  these 2  functions uses are the assignment which is done by me
  const changetext=()=>{
    let a=text.substring(0,10);
    setText(a)
  }
  const clearthetext= ()=>{
    let b='';
    setText(b)
  }


  return (
  <>
  <div className="container"  style={{color:props.mode ==='dark'?'white':'#042743'}}>
   <h1  className="mb-2">{props.heading}</h1>
   <div className="mb-3">
    <textarea className="form-control"  value={text}  onChange={handleOnChange}  style={{backgroundColor: props.mode ==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}  id="myBox" cols="5" rows="8"></textarea>
   </div>
   <button disabled={text.length===0}  className="btn btn-primary  mx-1 my-1"  onClick={handleUpClick}>Convert to Uppercase</button>
    <button   disabled={text.length===0}  className="btn btn-primary mx-2 my-1"  onClick={handleloClick}>Convert to Lowercase</button>
 
    <button   disabled={text.length===0}  className="btn btn-primary mx-2  my-1"  onClick={changetext}>Convert to another text</button>  
    <button   disabled={text.length===0}  className="btn btn-primary mx-1 my-4"  onClick={clearthetext}>clear the text</button>      
 </div>

 <div className="container  my-5"   style={{color: props.mode ==='dark'?'white':'#042743'}}>
   <h2>your text summary</h2>
   <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words  and {text.length} characters</p>
   <p>{0.008 * text.split(" ").filter((element) =>{return element.length!==0}).length}  minutes to read</p>
   <h2>Preview</h2>
   <p>{text.length>0?"text":"enter something in above box"}</p>
 </div>
 </>
  )
}
