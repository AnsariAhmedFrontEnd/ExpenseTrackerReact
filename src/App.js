import React from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Card from './components/UI/Card';
import NewExpense from "./components/Expenses/NewExpense/NewExpense";


const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      locationOfExpenditure: "Mall",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      locationOfExpenditure: "Electronic",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      locationOfExpenditure: "Office",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      locationOfExpenditure: "Home",
    },
  ];


  const expenseItem = expenses.map((expense) => {
    return (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        locationOfExpenditure={expense.locationOfExpenditure}
      ></ExpenseItem>
    );
  });

  // return React.createElement(
  //   Card,
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //    expenseItem
  // );

  const addExpenseHandler = (expense) => {
    console.log('in App.js');
    console.log(expenses)
  }
  
  return (
    <Card>
      <NewExpense onAddExpense={addExpenseHandler} />
      {expenseItem}
    </Card>
  );
}

export default App;
