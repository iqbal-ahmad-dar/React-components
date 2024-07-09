import TextBox from './components/TextBox';
import './App.css';
import { useState } from 'react';
function App() {
  const[value,setValue]=useState(null)
  return (
    <div className="">
      <TextBox onChange={(data)=>setValue(data)} value={value} labelName={'Test'}/>
    </div>
  );
}

export default App;
