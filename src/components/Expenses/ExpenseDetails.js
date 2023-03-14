import React from 'react';
import './ExpenseItem.css';

const ExpenseDeatails = (props) => {
    // const clickHander = () => {
    //     console.log('Clicked!!!')
    // }

    // const deleteExpense = () => {
    //     console.log('deleted')
    //     }
    return (
        <div className='expense-item__description'>
        <h2>{props.title} - {props.locationOfExpenditure}</h2>
    <div className="expense-item__price">Rs. {props.amount}</div>
    {/* <button onClick={clickHander}>Change Title</button> */}
    {/* <button onClick={deleteExpense}>Delete Item</button> */}
    </div>
    )
}


export default ExpenseDeatails;