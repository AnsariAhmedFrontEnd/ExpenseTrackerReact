import ExpenseDeatails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <ExpenseDeatails title={props.title} locationOfExpenditure={props.locationOfExpenditure} amount={props.amount} />
          
        </div>
    )
}

export default ExpenseItem