
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
function App() {
  const[amount,setamount]=useState(0)
  const[year,setyear]=useState(0)
  const[rate,setrate]=useState(0)
  
  const[Interest,setinterest]=useState(0)

  console.log(amount,year,rate);

  const calculate=(e)=>{
    const output=amount*year*rate/100;
    console.log(output);
    setinterest(output)
  }
  const reset=(e)=>{
   setinterest(0)
   setamount(0)
   setrate(0)
   setyear(0)
   
  }
  return (
    
    <div className="App">
     <div className='container'>

      <div className='header'>
        <h1>Simple Interest Calculator</h1>
        <p>Calculate your simple Interest with us ❤️</p>
      </div>

      <div className='total'>
        <h2>&#8377; {Interest}</h2>
        <p>Your Total Interest</p>
      </div>

      <div className='form'>
        <form>

          <div className='input'>
            <TextField id="outlined-basic" value={amount||""} onChange={(e)=>setamount(e.target.value)} label="Amount" variant="outlined" /> <br />
            <TextField id="filled-basic" value={year||""}  onChange={(e)=>setyear(e.target.value)} label="Year" variant="outlined" /> <br />
            <TextField id="standard-basic" value={rate||""}  onChange={(e)=>setrate(e.target.value)} label="Rate" variant="outlined" /> <br /> 
          </div>

          <div className='button'>
          <Button  variant="contained" onClick={e=>calculate(e)}>Calculate</Button>
          <Button variant="outlined" onClick={e=>reset(e)}>Reset</Button>
          </div>
        </form>
      </div>
     </div>
    </div>
   
  );
}

export default App;
