import "./ExpenseForm.css"
import { useState } from "react";

const ExpenseForm = (probs) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     title: "",
    //     amount: "",
    //     date: ""
    // })

    const titleHandler = (e) =>{
        setTitle(e.target.value);

        // setUserInput({
        //     ...userInput,
        //     title: e.target.value    
        // });

        // this way is safer than the one above cuz it ensures that we are using the most recent values
        // as the updates are schaduled
        // setUserInput((prevState)=> {
        //     return {...prevState, title: e.target.value};
        // });
    }
    const amountHandler = (e) => {
        setAmount(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     amount: e.target.value
        // });
        // setUserInput((prevState)=> {
        //     return {...prevState, amount: e.target.value};
        // });
    }   
    const dateHandler = (e) => {
        setDate(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     date: e.target.value
        // });
        // setUserInput((prevState)=> {
        //     return {...prevState, amount: e.target.value};
        // });
    }   

    const submitHandler = (event) => {
        // prevent refresh
        event.preventDefault();

        // store values 
        const expenseData = {
            title,
            amount,
            date:new Date(date)
        }
        
        probs.onSaveExpenseData(expenseData);

        // reset values
        setTitle("");
        setAmount("");
        setDate("");

    };
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div>
                    <label className="new-expense__control">Title</label>
                    <input type="text" value={title} onChange={titleHandler}/>
                </div>
                <div>
                    <label className="new-expense__control">Amount</label>
                    <input value={amount} type="number" min={0.01} step={0.01} onChange={amountHandler}/>
                </div>
                <div>
                    <label className="new-expense__control">Date</label>
                    <input value={date} type="date" min="2019-01-01" max="2023-03-03" onChange={dateHandler}/>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm; 