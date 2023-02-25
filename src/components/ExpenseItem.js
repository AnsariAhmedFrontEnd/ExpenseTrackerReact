import './ExpenseItem.css'

function ExpenseItem() {

    const expenseDate = new Date(2023, 1, 25);
    const expenseTitle = 'Petrol';
    const expenseAmount = 200;
    const locatationOfExpenditure = 'At HP';
    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle} - {locatationOfExpenditure}</h2>
                <div className="expense-item__price">Rs. {expenseAmount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem