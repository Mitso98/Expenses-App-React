import "./NewExpense.css"
import "./ExpenseForm"
import ExpenseForm from "./ExpenseForm";

const NewExpense = (probs) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData =  {
             ...enteredExpenseData,
             id: Math.random().toString()
        }

        probs.onSaveExpense(expenseData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpense;