import ExpenseDeatails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import Card from './Card'
import './ExpenseItem.css';

function ExpenseItem(props) {
  
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <ExpenseDeatails title={props.title} locationOfExpenditure={props.locationOfExpenditure} amount={props.amount} />
          
        </Card>
    )
}

export default ExpenseItem