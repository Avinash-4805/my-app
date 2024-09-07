import React, {useState} from 'react'

function TextForm(props) {
  // let age = 15
  // let canWatch = 'Not Available'
  // if(age >= 18) canWatch = 'Watch Now';

  const handleChangeColor = () => {
    document.querySelector('textarea').style.backgroundColor = "red";
    document.querySelector('textarea').style.color = "#fff";
    props.showAlert('Change color', 'success');
  }

  const handleUpClick = () => {
    let newText = text.toLocaleUpperCase()
    setText(newText)
    props.showAlert('Converted to Upper Case', 'success');
  }

  const handleClearText = () => {
    let newText = ''
    setText(newText)
    props.showAlert('Clear Text ', 'success');
  }


  const handleLoClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert('Converted to Lower Case', 'success');
  }

  const handaleOnChange = (event) => {
    setText(event.target.value)
  
  }
  const handleCopy = () => {
    var text = document.getElementById('mybox')
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert('Text Copied', 'success');
  } 
  const handleExtraSpaces = () => {
    let newText = text.split(/ [ ] + /)
    setText(newText.join(" "))
    props.showAlert('Extra space removed', 'success');
  }

  const [text, setText] = useState ('Enter text here')
  return (
  <>
    <div className="cointainer" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
     <div className="mb-3">
      <h1>{props.heading}</h1>
      <textarea type="textarea" style={{backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} className="form-control" value= {text} onChange={handaleOnChange} id="mybox" rows="8"></textarea>
     </div>
     <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
     <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
     <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
     <button className="btn btn-primary mx-2" onClick={handleChangeColor}>Change Color</button>
     <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
     <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
     
     
     

   

     
   
     {/* <button className="btn btn-primary">{age >= 18 ? 'watch Now' : 'Not Available'}</button> */}
     {/* <button className="btn btn-primary">{canWatch}</button> */}

    </div>
   <div className="container my-4" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
    <h1>Your text sumary</h1>
    <p>{text.split(' ').length} words, {text.length} charecters</p>
    <p>{0.008*text.split(' ').length} minutes need to read</p>
    <h2>Peview</h2>
    <p>{text.length>0?text:'Enter somthing above textbox to preview here '}</p>
   </div>
  
  </>
  )
}

export default TextForm
