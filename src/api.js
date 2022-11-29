
const postHeaders = (data) => ({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  
  const deleteHeaders = (data) => ({
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  
  export const postExpenses = async (data) => {
    const res = await fetch('api/create-expense', postHeaders(data))
    const body = await res.json()
    return body
  }
  
  export const getExpenses = async () => {
    const res = await fetch('/api/expenses')
    const body = await res.json()
    return body
  }
  
  export const deleteExpense = async (id) => {
    const res = await fetch(`/api/expense/${id}`, deleteHeaders({ id }))
    const body = await res.json()
    return body
  }