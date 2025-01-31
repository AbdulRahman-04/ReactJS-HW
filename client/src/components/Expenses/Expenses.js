import React from 'react'
import "./Expenses.css"

function Expenses(props) {

    let month = props.date.toLocaleString('en-US',{month: 'long'});
    let year = props.date.getFullYear();
    let day =  props.date.toLocaleString('en-US',{day: 'long'});

  return (
   <div className="expense-item">
    <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
    </div>
      <div className="expense-Item__description">
        <h2>{props.title}</h2>
        <div className="expense-Item__price">
            {props.amount}
        </div>
      </div>
   </div>
  )
}

export default Expenses