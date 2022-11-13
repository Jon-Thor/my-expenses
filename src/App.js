import { useRef, useState } from 'react';
import './App.css';



const App =() => {
  const [count, setCount] = useState(0);
  const [displayValue, setDisplayValue] = useState([]);

  const inputvalue = useRef("");
  const number = useRef(0)

  const totalnum = useRef([0])

  const handleClick = () => {

    setDisplayValue(displayValue.concat(inputvalue.current))

    setCount(count + parseInt(number.current));	

    totalnum.current.push(number.current)
	};

  console.log(totalnum.current)
  
  return (
    <div className="App">
      <p >Submitted Value: [{displayValue.toString()}]</p>
        <p>
          Sum cost: {count}
        </p>

 
        <div className='container'>
        
        <label className='labels'>Name:</label>
        
        <input

        className='inputTag'

        onChange={(event) =>{
          inputvalue.current = event.target.value;
        
        }}
        />
         
      

        
          <label className='labels'> Cost:</label>
           
        <input
        className='inputTag'
        type={"number"}
        onChange={(event) => {
          number.current = event.target.value
        }}
        />
        
        <button type='button' className='submitButton'
                onClick={() => {
                  if(number.current != 0 && inputvalue.current.length > 0){
                  handleClick() 
                }}}
        >
        Submit
        </button>

        <button type='button' className='submitButton'
        onClick={() => {
          if(totalnum.current.length > 0){
          setCount(count - totalnum.current.pop())
         setDisplayValue(displayValue.slice(0,-1)) 
        }else{}
      
      }}
        >Remove from list</button>
        </div>
    </div>
    
  );
}

export default App;
