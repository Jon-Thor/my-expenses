import { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { postExpenses, getExpenses, deleteExpense } from './api'
import './App.css'  
import Card from './card'


const Expense = () => {
  const [data, setData] = useState()

  const handleGetExpenses = async () => {
    const body = await getExpenses()
    console.log(body)
    if (body) {
      setData(body)
    }
  }

  useEffect(() => {
    handleGetExpenses()
  }, [])

  const [name, setName] = useState('')
  const [cost, setCost] = useState(0)
  const [id, setId] = useState('')
  console.log(data)

  const handleSubmit = async () => {
    const { expense } = await postExpenses({
      name,
      cost,
    })
    setData(d => [...d, expense])
  }

  const handleDelete = async (itemId) => {
    const f = await deleteExpense(itemId)
    const deletedExpenseid = f.deletedExpense.id
    setData(data => data.filter(i => i.id !== deletedExpenseid))
  }

  return (
    <Container>
      <InputContainer>
      <div>
        <p>Name</p>
        <input
          onChange={(e) => {
            setName(e.target.value)
          }}
          value={name}
        />
      </div>
      <p>Cost</p>
      <input
        onChange={(e) => {
          setCost(e.target.value)
        }}
        value={cost}
      />
      <button onClick={handleSubmit}>Submit!</button>
      
      <div>
        <p>Delete expense item by id</p>
        <input onChange={(e) => setId(e.target.value)} />
        <button onClick={handleDelete}>Delete!</button>
      </div>
      </InputContainer>
      <div>{data ? data.map((item) => <Card item={item} key={item.id} handelDelete={handleDelete}/>) : <p>Loading...</p>}</div>
    </Container>
  )
}

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

const Smallcontainer = styled.p`
border-radius: 3px;
padding: 10px 15px;
width: fit-content;
margin: 10px;
color: white;
`

const Container = styled.div`
  display: flex;
  color: white;
  border: 1px solid black;
  height: 50%;
  width: 100%;
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

export default Expense