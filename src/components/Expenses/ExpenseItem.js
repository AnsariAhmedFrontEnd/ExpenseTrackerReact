import React from 'react';
import ExpenseDeatails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <h2>{props.title}</h2>
            <ExpenseDeatails title={props.title} locationOfExpenditure={props.locationOfExpenditure} amount={props.amount} />
        </Card>
    )
}

export default ExpenseItem