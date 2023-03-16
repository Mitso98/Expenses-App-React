import { useState } from "react";

import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

function App() {
  const DUMMY_DATA = [
    {
      id: "1",
      date: new Date(2021, 2, 21),
      title: "Car insurance",
      amount: 249.52,
    },
    {
      id: "2",
      date: new Date(2021, 3, 22),
      title: "Food",
      amount: 250.52,
    },
    {
      id: "3",
      date: new Date(2021, 4, 23),
      title: "Health care",
      amount: 251.52,
    },
    {
      id: "4",
      date: new Date(2020, 4, 23),
      title: "Health care",
      amount: 500.52,
    },
    {
      id: "5",
      date: new Date(2020, 3, 25),
      title: "Health care",
      amount: 300.52,
    },
    {
      id: "6",
      date: new Date(2020, 5, 25),
      title: "Health care",
      amount: 400.52,
    },
  ];

  const [expensesData, setExpensesData] = useState(DUMMY_DATA);

  const addExpenseHandler = (newExpenseData) => {
    setExpensesData([newExpenseData, ...expensesData]);
  };

  return (
    <div className="App">
      <NewExpense onSaveExpense={addExpenseHandler} />
      <Expenses items={expensesData} />
    </div>
  );
}

export default App;
