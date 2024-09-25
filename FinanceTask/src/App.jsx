
import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

import { Link } from 'react-router-dom';

function App() {


  const [Amount, setAmount] = useState('');
  const [type, setType] = useState('Income');
  const [category, setCategory] = useState('');
  const [transactionDate, setTransactionDate] = useState('');
  const [transaction, setTransaction] = useState([]);
  const [filter, setFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const filteredTransactions = transaction.filter((data) =>
    filter === 'All' || data.type === filter
  );
  const currentItems = filteredTransactions.slice(indexOfFirstItem, indexOfLastItem);

  const totalIncome = transaction.reduce(
    (acc, t) => (t.type === 'Income' ? acc + Number(t.Amount) : acc),
    0
  );
  const totalExpense = transaction.reduce(
    (acc, t) => (t.type === 'Expense' ? acc + Number(t.Amount) : acc),
    0
  );
  const balanceAmount = totalIncome - totalExpense;

  const handleAddTransaction = () => {
    if (Amount && type && category && transactionDate) {
      const newTransaction = { Amount, type, category, date: transactionDate };
      setTransaction([...transaction, newTransaction]);
      setAmount('');
      setCategory('');
      setTransactionDate('');
    } else {
      alert('Please fill out all fields');
    }
  };

  const handleDeleteTransaction = (index) => {
    setTransaction(transaction.filter((_, ind) => ind !== index));
  };

  const data = [
    { name: 'Income', value: totalIncome },
    { name: 'Expense', value: totalExpense },
  ];
  const COLORS = ['#00C49F', '#b0f1e5'];

  return (
    <>
    <div className="main dashboard-container flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="aside bg-purple-600 w-full lg:w-1/5 p-4 text-white fixed lg:static bottom-0 lg:bottom-auto z-50">
    <h2 className=" text-white text-3xl font-bold mb-6 text-center my-8">Dashboard</h2>
    <nav>
      <ul className='px-8 my-4 text-xl'>
        <li className="mb-4"><Link to={'/analytics'} className="text-white">Analytics</Link></li>
        <li className="mb-4"><a href="#" className="text-white">Transactions</a></li>
        <li className="mb-4"><a href="#" className="text-white">Reports</a></li>
        <li><a href="#" className="text-white">Settings</a></li>
      </ul>
    </nav>
  </aside>

      {/* Main Content */}
      <main className="w-full lg:w-4/5 p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="dashbord text-2xl sm:text-4xl 
          font-bold">Expense Management Dashboard</h1>
          <div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => handleAddTransaction()}>
              Add Transaction
            </button>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="aside p-4 rounded-lg shadow-lg">
            <h3 className="text-lg">Total Income</h3>
            <p className="text-2xl font-bold">${totalIncome}</p>
          </div>
          <div className="aside p-4 rounded-lg shadow-lg">
            <h3 className="text-lg">Total Expense</h3>
            <p className="text-2xl font-bold">${totalExpense}</p>
          </div>
          <div className="aside p-4 rounded-lg shadow-lg">
            <h3 className="text-lg">Balance</h3>
            <p className="text-2xl font-bold">${balanceAmount}</p>
          </div>
        </div>

        {/* Transaction Form */}
        <section className="aside p-4 rounded-lg shadow-lg mb-8">
          <h2 className="dashbord text-xl font-bold mb-4">Add New Transaction</h2>
          <div className="flex flex-col lg:flex-row gap-4">
            <input
              value={Amount}
              onChange={(e) => setAmount(e.target.value)}
              type="number"
              placeholder="Enter Amount"
              className="p-2 border border-blue-600 rounded flex-1"
            />
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="p-2 border border-blue-600 rounded flex-1"
            >
              <option value="Expense">Expense</option>
              <option value="Income">Income</option>
            </select>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="Category"
              className="p-2 border border-blue-600 rounded flex-1"
            />
            <input
              value={transactionDate}
              onChange={(e) => setTransactionDate(e.target.value)}
              type="date"
              className="p-2 border border-blue-600 rounded flex-1"
            />
            <button
              onClick={handleAddTransaction}
              className=" px-4 py-2 flex-none p-4 bg-blue-600 text-white rounded-lg sm:px-6 sm:py-3"
            >
              Submit
            </button>
          </div>
        </section>

        {/* Transaction Table */}
        <section className="aside p-4 rounded-lg shadow-lg mb-8">
          <h2 className="dashbord text-xl font-bold mb-4">Transactions</h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap mb-4">
            <button onClick={() => setFilter('All')} className="bg-gray-200 px-4 py-2 mr-2 rounded mb-2">
              All
            </button>
            <button onClick={() => setFilter('Income')} className="bg-green-500 text-white px-4 py-2 mr-2 rounded mb-2">
              Income
            </button>
            <button onClick={() => setFilter('Expense')} className="bg-red-500 text-white px-4 py-2 rounded mb-2">
              Expense
            </button>
          </div>

          {/* Transactions List */}
          <table className="w-full text-left table-auto">
            <thead>
              <tr>
                <th className="border px-4 py-2">#</th>
                <th className="border px-4 py-2">Amount</th>
                <th className="border px-4 py-2">Type</th>
                <th className="border px-4 py-2">Category</th>
                <th className="border px-4 py-2">Date</th>
                <th className="border px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((data, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">${data.Amount}</td>
                  <td className="border px-4 py-2">{data.type}</td>
                  <td className="border px-4 py-2">{data.category}</td>
                  <td className="border px-4 py-2">{data.date}</td>
                  <td className="border px-4 py-2">
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded"
                      onClick={() => handleDeleteTransaction(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="aside flex justify-center mt-4">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              className="px-4 py-2  rounded mx-2"
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <button
              onClick={() => setCurrentPage(prev => prev + 1)}
              className="px-4 py-2  rounded mx-2"
              disabled={indexOfLastItem >= filteredTransactions.length}
            >
              Next
            </button>
          </div>
        </section>

        {/* Pie Chart Section */}
        <section className="aside mt-8 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Income vs Expense</h2>
          <div className="flex justify-center">
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
        </section>
      </main>


    </div>
    
    </>
  );
}

export default App;
