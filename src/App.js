import './App.css';

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    {
        date: new Date(2023,0,10),
        title: 'New book',
        price: 30.99
    },
    {
        date: new Date(2023,0,10),
        title: 'New jeans',
        price: 99.99
    }
]
const App = () => {
    const addExpensehandler = (expense) => {
        console.log('In App.js')
        console.log(expense)
    }

    return (
    <div className="App">
        <NewExpense onAddExpense={addExpensehandler}></NewExpense>
        <Expenses expenses={DUMMY_EXPENSES}></Expenses>
    </div>
  );
}

export default App;
