import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../ui/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import { useState } from "react";

function Expenses(probs) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  let content = <p>No expenses has been added!</p>;

  if (probs.items.length > 0) {
    content = probs.items.map((expense) => {
      let x = new Date(expense.date);
      if (x.getFullYear() == filteredYear) {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        );
      }
      return null;
    });
  }
  const filteredExpenses = probs.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterHandler} />
      <ExpenseChart expenses={filteredExpenses} />
      {content}
    </Card>
  );
}

export default Expenses;
