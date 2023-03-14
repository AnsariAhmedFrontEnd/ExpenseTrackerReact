import React, {useState} from 'react';
import ExpenseDeatails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title)
    const [price, setPrice] = useState(props.amount);

    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title)

    }

    const priceClickHandler = () => {
            setPrice('100');
    }
  
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <h2>{title}</h2>
            <ExpenseDeatails title={props.title} locationOfExpenditure={props.locationOfExpenditure} amount={price} />
            <button onClick={priceClickHandler}>Change Price</button>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem