import { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { postExpenses, getExpenses, deleteExpense } from './api'
import './App.css'  


const CardContainer = styled.div`
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

const Card = ({item, handelDelete}) => {
    const {id, name, cost} = item

    const onDelete = () => {
        handelDelete(id)
    }
  return (
      <CardContainer>
        <InnderCard>
        <p>Item name {name}</p>
        <p>Item cost {cost}</p>
        </InnderCard>
        <RemoveButton onClick={onDelete}>X</RemoveButton>
      </CardContainer>
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
  color: white;
  border: 1px solid black;
  height: 50%;
  width: 100%;
`



export default Card