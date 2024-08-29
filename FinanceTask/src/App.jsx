import { useState } from 'react'
import './App.css'
import ExpenceTracker from './component/ExpenceTracker';

function App() {
  const [Amount, setAmount] = useState(0);
  const [type, setType] = useState("");
  const [transaction,settransaction] = useState([]);
 var handleAddTransaction = ()=> {
        settransaction([...transaction, {Amount , type}])
        setAmount("");
        setType("Income");
 } 
 console.log("tramsections hogaya",transaction)


  return (
    <ExpenceTracker
         Amount={Amount}
         type={type} 
          setAmount={setAmount}
          setType={setType}
          handleAddTransaction={handleAddTransaction}
          transaction={transaction}
    />

  )
}

export default App;
