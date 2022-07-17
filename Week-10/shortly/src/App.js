import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { useState } from 'react';
function App() {
  const [inputValue, setInputValue]=useState("");
  return (
    <div className="App">
      <Header/>
      
      <Body setInputValue={setInputValue} inputValue={inputValue}/>
      <Footer/>
    </div>
  );
}

export default App;
