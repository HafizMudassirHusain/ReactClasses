import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, LineChart, Line } from 'recharts';
import '../component/ExpenceTracker.css'

function Analytics() {
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

  const barChartData = transaction.map((t, index) => ({
    date: t.date,
    amount: Number(t.Amount),
    type: t.type,
  }));

  const COLORS = ['#00C49F', '#FF8042'];

  return (
    <div className="dashboard-container grid grid-cols-1 lg:grid-cols-5 min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="aside w-full lg:w-1/5 p-4 bg-gray-800 text-white lg:static bottom-0 z-50">
        <h2 className="text-3xl font-bold mb-6 text-center">Dashboard</h2>
        <nav>
          <ul className='px-5'>
            <li className="mb-4"><a href="#" className="text-white">Overview</a></li>
            <li className="mb-4"><a href="#" className="text-white">Transactions</a></li>
            <li className="mb-4"><a href="#" className="text-white">Reports</a></li>
            <li><a href="#" className="text-white">Settings</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="w-full lg:col-span-4 p-6">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Expense Management Dashboard</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => handleAddTransaction()}>
            Add Transaction
          </button>
        </header>

        {/* Stats Cards and Pie Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3>Total Income</h3>
            <p className="text-2xl font-bold">${totalIncome}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3>Total Expense</h3>
            <p className="text-2xl font-bold">${totalExpense}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3>Balance</h3>
            <p className="text-2xl font-bold">${balanceAmount}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Pie Chart */}
          <section className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Income vs Expense</h2>
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
          </section>

          {/* Bar Chart */}
          <section className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Transaction Amounts</h2>
            <BarChart width={400} height={400} data={barChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="amount" fill="#00C49F" />
            </BarChart>
          </section>
        </div>

        {/* Line Chart */}
        <section className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Income & Expense Trends</h2>
          <LineChart width={600} height={300} data={barChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="amount" stroke="#8884d8" />
          </LineChart>
        </section>

        {/* Transactions Section */}
        {/* ... existing transaction table and form */}
      </main>
    </div>
  );
}

export default Analytics;
