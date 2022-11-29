import { useState, useRef, useEffect } from 'react'
import styled, { css, keyframes } from 'styled-components'
import './App.css'
import { v4 as uuid } from 'uuid'
import Expense from './Cat'

const App =() => {
  
  
  //const [count, setCount] = useState(0);
  const [displayValue, setDisplayValue] = useState([]);

  const inputvalue = useRef("");
  const number = useRef(0)

  const totalnum = useRef([])


  const newHandleClick = () => {
    setDisplayValue((list) => [
      ...list,
      { name: inputvalue.current, value: number.current, key: uuid()},
    ])
    totalnum.current.push(number.current)
  }


  console.log(displayValue)
  
  return (
      <Container>
        <div><Expense /></div>


    </Container>

  );
}

const InputTag = styled.input`
  font-size: larger;
  
`

const Labels = styled.label`
  margin-top: 10px;
  font-size: larger;
`

const InputContainer = styled.div`
padding: 10px;
color: teal;
border: teal solid 5px;
display: flex;
font-weight: bold;
font-size: larger;
flex-direction: column;
height: "fit-content"
`

const Smallcontainer = styled.p`
border-radius: 3px;
padding: 10px 15px;
width: fit-content;
margin: 10px;
color: white;
`

const Container = styled.div`
min-height: 100vh;
display: flex;
align-items: center;
font-size: calc(10px + 2vmin);
background-color: #282c34;
justify-content: space-evenly;
width: 100%;
`

const Card = styled.div`
border: teal solid 5px;
border-radius: 5px;
display: grid;
background-color: #282c34;
grid-template-columns: auto auto;
font-weight: bold;
height: fit-content;
width: 500px;
margin: 10px;
`

const InnderCard = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
`

const RemoveButton = styled.button`
background-color: #282c34;
justify-self: end;
height: 60px;
width: 60px;
margin: 10px;
font-size: larger;
color: red;
border: 0px;
cursor: pointer;
`
const SubmitButton = styled.button`
margin-top: 20px;
height: 50px;
font-size: large;
font-weight: bold;
`

      /*<InputContainer>
        <p>Sum cost: {displayValue.reduce(
            (previousValue, currentValue) =>
              previousValue + Number(currentValue.value),
            0
          )}
        </p>
        <p>Count: {displayValue.length}</p>
        
        
        <Labels>Name:</Labels>
        
        <InputTag

        onChange={(event) =>{
          inputvalue.current = event.target.value;
        
        }}
        />
         
          <Labels> Cost:</Labels>
           
        <InputTag
        type={"number"}
        onChange={(event) => {
          number.current = event.target.value
        }}
        />
        
        <SubmitButton type='button' className='submitButton'
                onClick={() => {
                  if(number.current != 0 && inputvalue.current.length > 0){
                  newHandleClick()
                }}}
        >
        Submit
        </SubmitButton>

        <SubmitButton type='button' className='submitButton'
        onClick={() => {
          if(totalnum.current.length > 0){
         totalnum.current.pop()
         setDisplayValue(displayValue.slice(0,-1)) 
        }else{}
      
      }}
        >Remove last from list</SubmitButton>
    </InputContainer>


    <div>
      {displayValue.map((item) => (
        <Card key={item.key}>
          <InnderCard>
        <Smallcontainer>Item: {item.name} </Smallcontainer>
        <Smallcontainer>Cost: {item.value} </Smallcontainer>
        </InnderCard>
        <RemoveButton onClick={() =>   {
          setDisplayValue((li) => li.filter((i) => i.key !== item.key))
          
        }}>X</RemoveButton></Card>
      ))}</div>*/

export default App;
