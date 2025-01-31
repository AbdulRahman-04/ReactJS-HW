import React from 'react'
import Expenses from './components/Expenses/Expenses.js'

function App() {

  let expenseDate = new Date(2025, 1, 31);
  let expenseTitle = "cfi fees";
  let expenseAmount = 250;


  return (
    <>
      
      <Expenses date={expenseDate} title={expenseTitle} amount={expenseAmount}/>


    </>
  )
}

export default App