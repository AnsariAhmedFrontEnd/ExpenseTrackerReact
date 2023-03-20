import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enterdTitle, setEnteredTitle] = useState('');
    const [enterdAmount, setEnteredAmount] = useState('');
    const [enterdDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enterdTitle:'',
    //     enterdAmount:'',
    //     enterdDate:''
    // })

    const titleChangeHanlder = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enterdTitle:event.target.value
        // })
    }

    const amountChangeHanlder = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enterdAmount:event.target.value
        // })
    }

    const dateChangeHanlder = (event) => {
       setEnteredDate(event.target.value);
    //   setUserInput({
    //     ...userInput,
    //     enterdDate:event.target.value
    //   })
    }

 
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
           title: enterdTitle,
           amount: +enterdAmount,
            date: new Date(enterdDate)
        }
    
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="Text" value={enterdTitle} onChange={titleChangeHanlder} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enterdAmount} onChange={amountChangeHanlder} />
            </div>
            <div className="new-expense__control">
                <label>Title</label>
                <input type="date" min="2019-01-01" max="2022-12-31" value={enterdDate} onChange={dateChangeHanlder} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={props.OnCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
    )
}

export default ExpenseForm;