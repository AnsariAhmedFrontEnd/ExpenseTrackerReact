import React from 'react';
import './ExpenseItem.css';

const ExpenseDeatails = (props) => {
    return (
        <div className='expense-item__description'>
        <h2>{props.title} - {props.locationOfExpenditure}</h2>
    <div className="expense-item__price">Rs. {props.amount}</div>
    </div>
    )
}


export default ExpenseDeatails;