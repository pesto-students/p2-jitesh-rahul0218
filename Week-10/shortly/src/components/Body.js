import React,{useEffect, useState} from 'react';
import CopyToClipboard from "react-copy-to-clipboard";

function Body({setInputValue}){
  const [value, setValue] = useState("");
  const LinkResult =({inputValue})=>
    console.log(inputValue);
  const [shortenLink, setShortenLink] = useState("Hello");
  const [copied, setCopied] = useState(false);
  
  const handleClick = ()=>{
    setInputValue(value);
    setValue("");
  }


  useEffect(()=>{
    const timer =setTimeout(()=>{
      setCopied(false);
    },150);

    return () => clearTimeout(timer);
  },[copied])
  
    return <div>
        <section class="landing">
            <div class="landing-text">
                <h1>More than just shorter links</h1>
                <p>
                    Build your brand’s recognition and get detailed insights on how your
                    links are performing.
                </p>
            
            </div>
            <div class="landing-image">
            <img src="../img/illustration-working.svg" alt="Working Illustration" />
            </div>
        </section>
 
  <section class="features" id="features"/>
    <div class="container">
      
      <div class="url-shorten-feature">
        <form class="url-shorten-form" id="url-shorten-form">
          <div>
            <input type="text" class="url-input" placeholder="Shorten a link here..." value={value} onChange={e=>setValue(e.target.value)}/>
            <span class="alert"></span>
          </div>
          <button onClick={handleClick} type="submit" class="btn btn-lg btn-plus-icon">Shorten It!</button>
        </form>
        <div class="url-shorten-results">
            <p>{shortenLink}</p>
            <CopyToClipboard text={shortenLink} onCopy={()=>setCopied(true)}>
            <button className={copied ? "copied" : ""}>Copy</button>
            </CopyToClipboard>
            
        </div>
      </div>

    </div>
    </div>
  
}
export default Body;
