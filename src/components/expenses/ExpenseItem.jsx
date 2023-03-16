import { useState } from "react";
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card";

const  ExpenseItem = (probs) => {

  const [title, setTitle] = useState(probs.title);

    const clickHandler = ()=> {
        setTitle("Updated");
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={probs.date}/>
            <div className="expense-item__description">
                <h2>{probs.title}</h2>
                <div className="expense-item__price">${probs.amount}</div>
                <button onClick={clickHandler}>Click</button>
            </div>
        </Card>
    );
}

export default ExpenseItem;
